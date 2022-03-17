import React, { useState, useContext, useEffect } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SnapshotArray from "../components/SnapshotArray/SnapshotArray";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import UserDashboardDescription from "../components/UserDashboardDescription/UserDashboardDescription";
import { BannerTitle } from "../components/common/Markup/Markup.styled";
import useFirebaseReader from "../api/Firebase/useFirebaseReader";
import { db } from "../firebase-config";
import TimeZone from "../components/TimeZone/TimeZone";
import {
  Description,
  UserDashboardContainer,
  TopWrapper,
} from "../layouts/UserDashboard.styled";
import DeleteSubreddit from "../components/DeleteSubreddit/DeleteSubreddit";

const UserDashboard = () => {
  // Firebase states
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapshot, setCommentsShapshot] = useState({});
  const [postsSnapshotDoc, setPostsSnapshostDoc] = useState("");
  const [postCountsSnapshotDoc, setPostCountsSnapshotDoc] = useState("");
  const [docDeleted, setDocDeleted] = useState(false);

  // Heatmap states
  const [selectedPosts, setSelectedPosts] = useState({});
  const [selectedPostCounts, setSelectedPostCounts] = useState({});
  const [selectedComments, setSelectedComments] = useState({});

  const [selectedCell, setSelectedCell] = useState<any[]>([]);

  const { user } = useContext<any>(FetcherContext);

  const [showHeatmap, setShowHeatmap] = useState(false);

  // Read snapshots from firebase
  useFirebaseReader(
    db,
    user,
    setPostsSnapshot,
    setPostCountsSnapshot,
    setCommentsShapshot,
    docDeleted
  );

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

  return (
    <UserDashboardContainer>
      <TopWrapper>
        <BannerTitle>User Dashboard</BannerTitle>
        <UserDashboardDescription></UserDashboardDescription>
        <SnapshotArray
          postsSnapshot={postsSnapshot}
          postCountsSnapshot={postCountsSnapshot}
          setSelectedPosts={setSelectedPosts}
          setSelectedPostCounts={setSelectedPostCounts}
          setPostsSnapshotDoc={setPostsSnapshostDoc}
          setPostCountsSnapshot={setPostCountsSnapshotDoc}
        ></SnapshotArray>
      </TopWrapper>
      {showHeatmap && (
        <>
          <Heatmap
            posts={selectedPosts}
            postCounts={selectedPostCounts}
            setSelectedCell={setSelectedCell}
          ></Heatmap>
          <Description>
            <TimeZone></TimeZone>
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
    </UserDashboardContainer>
  );
};

export default UserDashboard;
