import React from "react";
import FirebaseSubredditReader from "../api/Firebase/FirebaseSubredditReader";

const UserDashboard = () => {
  return (
    <>
      <h1>user dashboard</h1>
      <FirebaseSubredditReader></FirebaseSubredditReader>
    </>
  );
};

export default UserDashboard;
