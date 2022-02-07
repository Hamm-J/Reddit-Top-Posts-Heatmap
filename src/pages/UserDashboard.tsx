import React, { useContext, useState } from "react";
import { FetcherContext } from "../contexts/FetcherContext";
import FirebaseSubredditReader from "../api/Firebase/FirebaseSubredditReader";
import Heatmap from "../components/Heatmap/Heatmap";
import Inspector from "../components/Inspector/Inspector";
import Button from "../components/common/Button/Button";

const UserDashboard = () => {
  const { postsSnapshot, postCountsSnapshot, commentsSnapshot } =
    useContext<any>(FetcherContext);

  const [selectedPosts, setSelectedPosts] = useState({});
  const [selectedPostCounts, setSelectedPostCounts] = useState({});
  const [selectedComments, setSelectedComments] = useState({});

  // TODO:
  // pass the posts to the heatmap
  // sort how to seperate the different types of saved data (i.e. posts, postCounts, and comments)
  const showPosts = (d: any, ss: any) => {
    console.log(ss[d].data);
  };

  return (
    <>
      <h1>user dashboard</h1>
      <FirebaseSubredditReader></FirebaseSubredditReader>
      {/* <Heatmap posts={selectedPosts} postCounts={selectedPostCounts}></Heatmap> */}
      {/* <Inspector></Inspector> */}
      {Object.keys(postsSnapshot).map((doc: any, docIdx: number) => (
        <React.Fragment key={docIdx}>
          <p>{doc.data}</p>
          <Button
            label={`${doc}`}
            onClick={() => showPosts(doc, postsSnapshot)}
          ></Button>
        </React.Fragment>
      ))}
    </>
  );
};

export default UserDashboard;
