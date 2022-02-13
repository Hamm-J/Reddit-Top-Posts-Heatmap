import React, { useContext, useState } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SearchSubreddit from "../components/SearchSubreddit/SearchSubreddit";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Landing from "../components/Landing/Landing";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const Home = () => {
  const { posts, postCounts } = useContext<any>(FetcherContext);

  const [selectedCell, setSelectedCell] = useState<any[]>([]);
  const [showHeatmap, setShowHeatmap] = useState(false);

  return (
    <>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      {showHeatmap ? (
        <>
          <SearchSubreddit
            setSelectedCell={setSelectedCell}
            setShowHeatmap={setShowHeatmap}
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
          ></SearchSubreddit>
          <Landing></Landing>
        </>
      )}
    </>
  );
};

export default Home;
