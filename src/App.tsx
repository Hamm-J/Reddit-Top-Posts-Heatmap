import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Snapshots from "./pages/Snapshots";
import ErrorPage from "./pages/404";
import { FetcherContext } from "./contexts/FetcherContext";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  // reddit API
  const [comments, setComments] = useState<any>({});
  const [subreddit, setSubreddit] = useState("");

  // Firebase
  const [user, setUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const contextValues = {
    comments,
    setComments,
    subreddit,
    setSubreddit,
    user,
    setUser,
    isOpen,
    setIsOpen,
  };
  console.log("app rendered");
  return (
    <Router>
      <FetcherContext.Provider value={contextValues}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/snapshots" element={<Snapshots />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </FetcherContext.Provider>
    </Router>
  );
}

export default App;
