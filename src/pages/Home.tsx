import React, { useContext, useState } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SearchSubreddit from "../components/SearchSubreddit/SearchSubreddit";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Landing from "../components/Landing/Landing";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const Home = () => {
  // const { posts, postCounts } = useContext<any>(FetcherContext);
  // reddit API
  const [posts, setPosts] = useState({});
  const [postCounts, setPostCounts] = useState<any>({});

  // Set the state of which cell of the heatmap is clicked
  const [selectedCell, setSelectedCell] = useState<any[]>([]);

  // State so that the Heatmap is only shown on Home after the first search
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      {showHeatmap ? (
        <>
          <SearchSubreddit
            setSelectedCell={setSelectedCell}
            setShowHeatmap={setShowHeatmap}
            setPosts={setPosts}
            setPostCounts={setPostCounts}
          ></SearchSubreddit>
          <Heatmap
            posts={posts}
            postCounts={postCounts}
            setSelectedCell={setSelectedCell}
          ></Heatmap>
          {selectedCell.length > 0 ? (
            <Inspector selectedCell={selectedCell}></Inspector>
          ) : (
            <></>
          )}

          <Landing></Landing>
        </>
      ) : (
        <>
          <SearchSubreddit
            setSelectedCell={setSelectedCell}
            setShowHeatmap={setShowHeatmap}
            setPosts={setPosts}
            setPostCounts={setPostCounts}
          ></SearchSubreddit>
          <Landing></Landing>
        </>
      )}
    </>
  );
};

export default Home;
