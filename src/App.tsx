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

  // Inspector
  const [comments, setComments] = useState<any>({});

  // Landing page
  const [showHeatmap, setShowHeatmap] = useState<boolean>(true);

  // Firebase
  const [user, setUser] = useState({});
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapshot, setCommentsShapshot] = useState({});

  const contextValues = {
    posts,
    setPosts,
    postCounts,
    setPostCounts,
    comments,
    setComments,
    showHeatmap,
    setShowHeatmap,
    user,
    setUser,
    postsSnapshot,
    setPostsSnapshot,
    postCountsSnapshot,
    setPostCountsSnapshot,
    commentsSnapshot,
    setCommentsShapshot,
  };
  console.log("app rendered");
  return (
    <div>
      <Router>
        <FetcherContext.Provider value={contextValues}>
          {/* <RedditTopPostsFetcher></RedditTopPostsFetcher> */}
          {/* <RedditCommentsFetcher></RedditCommentsFetcher> */}
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
