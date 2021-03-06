import React, { useState, useContext, useEffect } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SnapshotArray from "../components/SnapshotArray/SnapshotArray";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import SnapshotsDescription from "../components/SnapshotDescription/SnapshotsDescription";
import {
  BannerTitle,
  SectionTitle,
} from "../components/common/Markup/Markup.styled";
import useFirebaseReader from "../api/Firebase/useFirebaseReader";
import { db } from "../firebase-config";
import TimeZone from "../components/TimeZone/TimeZone";
import {
  Description,
  SnapshotsContainer,
  TopWrapper,
} from "../layouts/Snapshots.styled";
import DeleteSubreddit from "../components/DeleteSubreddit/DeleteSubreddit";

const Snapshots = () => {
  // Firebase states
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapshot, setCommentsSnapshot] = useState({});
  const [postsSnapshotDoc, setPostsSnapshotDoc] = useState("");
  const [postCountsSnapshotDoc, setPostCountsSnapshotDoc] = useState("");
  const [docDeleted, setDocDeleted] = useState(false);

  // Heatmap states
  const [selectedPosts, setSelectedPosts] = useState({});
  const [selectedPostCounts, setSelectedPostCounts] = useState({});
  const [selectedComments, setSelectedComments] = useState({});

  const [selectedCell, setSelectedCell] = useState<any[]>([]);

  const { user } = useContext<any>(FetcherContext);

  const [showHeatmap, setShowHeatmap] = useState(false);

  // Snapshot array states
  const [selectedSnapshot, setSelectedSnapshot] = useState("");
  const [loading, setLoading] = useState(false);

  const [
    firebasePostsSnapshot,
    firebasePostCountsSnapshot,
    firebaseCommentsSnapshot,
    firebaseLoading,
    firebaseReader,
  ] = useFirebaseReader(db, user);

  useEffect(() => {
    setPostsSnapshot(firebasePostsSnapshot);
    setPostCountsSnapshot(firebasePostCountsSnapshot);
    setCommentsSnapshot(firebaseCommentsSnapshot);
    setLoading(firebaseLoading);
  }, [
    firebasePostsSnapshot,
    firebasePostCountsSnapshot,
    firebaseCommentsSnapshot,
    firebaseLoading,
  ]);

  useEffect(() => {
    firebaseReader();
  }, [user, docDeleted]);

  useEffect(() => {
    setSelectedCell([]);
  }, [selectedPosts]);

  useEffect(() => {
    if (Object.keys(selectedPosts).length > 0) {
      setShowHeatmap(true);
    } else {
      setShowHeatmap(false);
    }
  }, [selectedPosts]);

  useEffect(() => {
    setShowHeatmap(false);
  }, [docDeleted]);

  const handleSelectedCell = (selectedCell: []) => {
    setSelectedCell(selectedCell);
  };
  return (
    <SnapshotsContainer>
      <TopWrapper>
        <BannerTitle>Checkout your Subreddit Snapshots!</BannerTitle>
        {Object.keys(postCountsSnapshot).length > 0 && (
          <SnapshotsDescription></SnapshotsDescription>
        )}
        <SnapshotArray
          postsSnapshot={postsSnapshot}
          postCountsSnapshot={postCountsSnapshot}
          setSelectedPosts={setSelectedPosts}
          setSelectedPostCounts={setSelectedPostCounts}
          setPostsSnapshotDoc={setPostsSnapshotDoc}
          setPostCountsSnapshot={setPostCountsSnapshotDoc}
          setSelectedSnapshot={setSelectedSnapshot}
          loading={loading}
        ></SnapshotArray>
      </TopWrapper>
      {showHeatmap && (
        <>
          <SectionTitle>{selectedSnapshot}</SectionTitle>
          <Heatmap
            posts={selectedPosts}
            postCounts={selectedPostCounts}
            handleSelectedCell={handleSelectedCell}
          ></Heatmap>
          <Description>
            {/* <TimeZone></TimeZone> */}
            <DeleteSubreddit
              postsSnapshotDoc={postsSnapshotDoc}
              postCountsSnapshotDoc={postCountsSnapshotDoc}
              docDeleted={docDeleted}
              setDocDeleted={setDocDeleted}
            ></DeleteSubreddit>
          </Description>
          {selectedCell.length > 0 && (
            <Inspector selectedCell={selectedCell}></Inspector>
          )}
        </>
      )}
    </SnapshotsContainer>
  );
};

export default Snapshots;
