import { useState } from "react";
import RedditTopPostsFetcher from "./api/Reddit/RedditTopPostsFetcher";
import RedditCommentsFetcher from "./api/Reddit/RedditCommentsFetcher";
import FirebaseSubredditWriter from "./api/Firebase/FirebaseSubredditWriter";
import { FetcherContext } from "./contexts/FetcherContext";
import SearchSubreddit from "./components/SearchSubreddit/SearchSubreddit";
import FirebaseAuth from "./api/Firebase/FirebaseAuth";
import Heatmap from "./components/Heatmap/Heatmap";
import Inspector from "./components/Inspector/Inspector";
import Landing from "./components/Landing/Landing";
import BannerTitle from "./components/BannerTitle/BannerTitle";

function App() {
  const [posts, setPosts] = useState<any>({});
  const [postCounts, setPostCounts] = useState<any>({});
  const [subreddit, setSubreddit] = useState<string>("");
  const [time, setTime] = useState<string>("month");
  const [limit, setLimit] = useState<number>(10);
  const [topPostsUrl, setTopPostsUrl] = useState<string>(``);
  const [selectedCell, setSelectedCell] = useState<any[]>([]);
  const [comments, setComments] = useState<any>({});
  const [showLanding, setShowLanding] = useState<boolean>(true);

  const contextValues = {
    topPostsUrl,
    setTopPostsUrl,
    posts,
    setPosts,
    postCounts,
    setPostCounts,
    subreddit,
    setSubreddit,
    time,
    setTime,
    limit,
    setLimit,
    selectedCell,
    setSelectedCell,
    comments,
    setComments,
    showLanding,
    setShowLanding,
  };
  return (
    <div>
      <FetcherContext.Provider value={contextValues}>
        <RedditTopPostsFetcher></RedditTopPostsFetcher>
        <RedditCommentsFetcher></RedditCommentsFetcher>
        <FirebaseSubredditWriter></FirebaseSubredditWriter>
        <FirebaseAuth></FirebaseAuth>
        <BannerTitle>Find the best time to post on Reddit!</BannerTitle>
        {showLanding ? (
          <>
            <SearchSubreddit></SearchSubreddit>
            <Landing></Landing>
          </>
        ) : (
          <>
            <SearchSubreddit></SearchSubreddit>
            <Heatmap></Heatmap>
            <Inspector></Inspector>
          </>
        )}
      </FetcherContext.Provider>
    </div>
  );
}

export default App;
