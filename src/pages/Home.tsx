import React, { useContext, useState } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import SearchSubreddit from "../components/SearchSubreddit/SearchSubreddit";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Landing from "../components/Landing/Landing";
import BannerTitle from "../components/BannerTitle/BannerTitle";

const Home = () => {
  const { showHeatmap, posts, postCounts, selectedCell } =
    useContext<any>(FetcherContext);

  const [topPostsUrl, setTopPostsUrl] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [time, setTime] = useState("month");
  const [limit, setLimit] = useState(100);

  return (
    <>
      <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
      {showHeatmap ? (
        <>
          <SearchSubreddit
            subreddit={subreddit}
            setSubreddit={setSubreddit}
            time={time}
            setTime={setTime}
            limit={limit}
            setLimit={setLimit}
            topPostsUrl={topPostsUrl}
            setTopPostsUrl={setTopPostsUrl}
          ></SearchSubreddit>
          <Landing></Landing>
        </>
      ) : (
        <>
          <SearchSubreddit
            subreddit={subreddit}
            setSubreddit={setSubreddit}
            time={time}
            setTime={setTime}
            limit={limit}
            setLimit={setLimit}
            topPostsUrl={topPostsUrl}
            setTopPostsUrl={setTopPostsUrl}
          ></SearchSubreddit>
          <Heatmap posts={posts} postCounts={postCounts}></Heatmap>
          {selectedCell.length > 0 ? <Inspector></Inspector> : <></>}
          <Landing></Landing>
        </>
      )}
    </>
  );
};

export default Home;
