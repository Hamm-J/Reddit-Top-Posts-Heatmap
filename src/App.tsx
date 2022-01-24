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
import Navbar from "./components/Navbar/Navbar";

function App() {
  // reddit API
  const [posts, setPosts] = useState<any>({});
  const [postCounts, setPostCounts] = useState<any>({});
  const [subreddit, setSubreddit] = useState<string>("");
  const [time, setTime] = useState<string>("month");
  const [limit, setLimit] = useState<number>(10);
  const [topPostsUrl, setTopPostsUrl] = useState<string>(``);

  // Inspector
  const [selectedCell, setSelectedCell] = useState<any[]>([]);
  const [comments, setComments] = useState<any>({});

  // Landing page
  const [showLanding, setShowLanding] = useState<boolean>(true);

  // Firebase user
  const [user, setUser] = useState({});

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
    user,
    setUser,
  };
  return (
    <div>
      <FetcherContext.Provider value={contextValues}>
        <Navbar></Navbar>
        <RedditTopPostsFetcher></RedditTopPostsFetcher>
        <RedditCommentsFetcher></RedditCommentsFetcher>
        {/* <FirebaseAuth></FirebaseAuth> */}
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
            <FirebaseSubredditWriter></FirebaseSubredditWriter>
          </>
        )}
      </FetcherContext.Provider>
    </div>
  );
}

export default App;
