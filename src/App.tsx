import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserDashboard from "./pages/UserDashboard";
import ErrorPage from "./pages/404";
import { FetcherContext } from "./contexts/FetcherContext";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  // reddit API
  const [comments, setComments] = useState<any>({});

  // Firebase
  const [user, setUser] = useState({});

  const contextValues = {
    comments,
    setComments,
    user,
    setUser,
  };
  console.log("app rendered");
  return (
    <div>
      <Router>
        <FetcherContext.Provider value={contextValues}>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/user_dashboard" element={<UserDashboard />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </FetcherContext.Provider>
      </Router>
    </div>
  );
}

export default App;
