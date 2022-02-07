import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import ErrorPage from "./pages/404";
import RedditTopPostsFetcher from "./api/Reddit/RedditTopPostsFetcher";
import RedditCommentsFetcher from "./api/Reddit/RedditCommentsFetcher";
import { FetcherContext } from "./contexts/FetcherContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  // reddit API
  const [posts, setPosts] = useState({});
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

  // Firebase
  const [user, setUser] = useState({});
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapshot, setCommentsShapshot] = useState({});

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
    postsSnapshot,
    setPostsSnapshot,
    postCountsSnapshot,
    setPostCountsSnapshot,
    commentsSnapshot,
    setCommentsShapshot,
  };
  return (
    <div>
      <Router>
        <FetcherContext.Provider value={contextValues}>
          <RedditTopPostsFetcher></RedditTopPostsFetcher>
          <RedditCommentsFetcher></RedditCommentsFetcher>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user_dashboard" element={<UserDashboard />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </FetcherContext.Provider>
      </Router>
    </div>
  );
}

export default App;
