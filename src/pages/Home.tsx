import React, { useState, useEffect } from "react";
import SearchSubreddit from "../components/SearchSubreddit/SearchSubreddit";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Landing from "../components/Landing/Landing";
import BannerTitle from "../components/BannerTitle/BannerTitle";
import SaveSubreddit from "../components/SaveSubreddit/SaveSubreddit";
import TimeZone from "../components/TimeZone/TimeZone";
import { HomeContainer, Description } from "../layouts/Home.styled";

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

  // reset the selectedCell whenever a a new set of posts is fetched
  useEffect(() => {
    setSelectedCell([]);
  }, [posts]);

  // show Heatmap after posts have been fetched
  useEffect(() => {
    if (Object.keys(posts).length > 0) {
      setShowHeatmap(true);
    } else {
      // pass
      return;
    }
  }, [posts]);
  return (
    <HomeContainer>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      <SearchSubreddit
        setPosts={setPosts}
        setPostCounts={setPostCounts}
      ></SearchSubreddit>
      {showHeatmap && (
        <>
          <Heatmap
            posts={posts}
            postCounts={postCounts}
            setSelectedCell={setSelectedCell}
          ></Heatmap>
          <Description>
            <TimeZone></TimeZone>
            <SaveSubreddit
              posts={posts}
              postCounts={postCounts}
            ></SaveSubreddit>
          </Description>
          {selectedCell.length > 0 && (
            <Inspector selectedCell={selectedCell}></Inspector>
          )}
        </>
      )}
      <Landing></Landing>
    </HomeContainer>
  );
};

export default Home;
