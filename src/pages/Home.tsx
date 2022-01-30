import React, { useContext } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SearchSubreddit from "../components/SearchSubreddit/SearchSubreddit";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Landing from "../components/Landing/Landing";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const Home = () => {
  const { showLanding, posts, postCounts } = useContext<any>(FetcherContext);

  return (
    <>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      {showLanding ? (
        <>
          <SearchSubreddit></SearchSubreddit>
          <Landing></Landing>
        </>
      ) : (
        <>
          <SearchSubreddit></SearchSubreddit>
          <Heatmap posts={posts} postCounts={postCounts}></Heatmap>
          <Inspector></Inspector>
          <Landing></Landing>
        </>
      )}
    </>
  );
};

export default Home;
