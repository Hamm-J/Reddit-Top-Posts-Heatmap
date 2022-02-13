import React, { useState, useEffect, useRef } from "react";
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

  console.log(posts);
  console.log(postCounts);

  const firstSearch = useRef(true);

  // show Heatmap after the first search returns posts
  useEffect(() => {
    if (firstSearch.current && Object.keys(posts).length > 0) {
      firstSearch.current = false;
      setShowHeatmap(true);
    } else {
      // pass
      return;
    }
  }, [posts]);
  return (
    <>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      {showHeatmap ? (
        <>
          <SearchSubreddit
            setSelectedCell={setSelectedCell}
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
