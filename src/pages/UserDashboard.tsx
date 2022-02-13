import React, { useState, useContext, useEffect, useRef } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SnapshotArray from "../components/SnapshotArray/SnapshotArray";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Button from "../components/common/Button/Button";
import useFirebaseReader from "../api/Firebase/useFirebaseReader";
import { db } from "../firebase-config";

const UserDashboard = () => {
  // Firebase states
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapshot, setCommentsShapshot] = useState({});

  // Heatmap states
  const [selectedPosts, setSelectedPosts] = useState({});
  const [selectedPostCounts, setSelectedPostCounts] = useState({});
  const [selectedComments, setSelectedComments] = useState({});

  const [selectedCell, setSelectedCell] = useState<any[]>([]);

  const { user } = useContext<any>(FetcherContext);

  const [showHeatmap, setShowHeatmap] = useState(false);

  const firstSelect = useRef(true);

  // Read snapshots from firebase
  useFirebaseReader(
    db,
    user,
    setPostsSnapshot,
    setPostCountsSnapshot,
    setCommentsShapshot
  );

  useEffect(() => {
    setSelectedCell([]);
  }, [selectedPosts]);

  useEffect(() => {
    if (firstSelect.current && Object.keys(selectedPosts).length > 0) {
      setShowHeatmap(true);
    } else {
      // pass
      return;
    }
  }, [selectedPosts]);

  return (
    <>
      <h1>user dashboard</h1>
      <SnapshotArray
        postsSnapshot={postsSnapshot}
        postCountsSnapshot={postCountsSnapshot}
        setSelectedPosts={setSelectedPosts}
        setSelectedPostCounts={setSelectedPostCounts}
      ></SnapshotArray>
      {showHeatmap && (
        <>
          <Heatmap
            posts={selectedPosts}
            postCounts={selectedPostCounts}
            setSelectedCell={setSelectedCell}
          ></Heatmap>
          {selectedCell.length > 0 && (
            <Inspector selectedCell={selectedCell}></Inspector>
          )}
        </>
      )}
    </>
  );
};

export default UserDashboard;
