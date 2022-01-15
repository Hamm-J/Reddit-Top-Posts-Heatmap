import { useState } from "react";
import RedditTopPostsFetcher from "./api/Reddit/RedditTopPostsFetcher";
import RedditCommentsFetcher from "./api/Reddit/RedditCommentsFetcher";
import FirebaseSubredditWriter from "./api/Firebase/FirebaseSubredditWriter";
import { FetcherContext } from "./contexts/FetcherContext";
import Navbar from "./components/Navbar/Navbar";
import FirebaseAuth from "./api/Firebase/FirebaseAuth";
import Heatmap from "./components/Heatmap/Heatmap";
import Inspector from "./components/Inspector/Inspector";

function App() {
  const [posts, setPosts] = useState<any>({});
  const [postCounts, setPostCounts] = useState<any>({});
  const [subreddit, setSubreddit] = useState<string>("halo");
  const [time, setTime] = useState<string>("month");
  const [limit, setLimit] = useState<number>(5);
  const [topPostsUrl, setTopPostsUrl] = useState<string>(
    `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
  );
  const [selectedCell, setSelectedCell] = useState<any[]>([]);
  const [comments, setComments] = useState<any>({});

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
  };
  return (
    <div>
      <FetcherContext.Provider value={contextValues}>
        <RedditTopPostsFetcher></RedditTopPostsFetcher>
        <RedditCommentsFetcher></RedditCommentsFetcher>
        <FirebaseSubredditWriter></FirebaseSubredditWriter>
        <FirebaseAuth></FirebaseAuth>
        <Navbar></Navbar>
        <Heatmap></Heatmap>
        <Inspector></Inspector>
      </FetcherContext.Provider>
    </div>
  );
}

export default App;
