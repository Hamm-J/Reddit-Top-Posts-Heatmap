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
  const showPosts = (doc: any, posts: any, postCounts: any) => {
    // split the doc to get the different parts of the doc info
    const docSplit = doc.split("_");
    const subreddit = docSplit[0];
    const docType = docSplit[1];
    const docSaveTime = docSplit[2];

    // get the posts for this doc
    const p = posts[`${subreddit}_posts_${docSaveTime}`].data;
    // get the postCounts for this doc
    const pc = postCounts[`${subreddit}_postCounts_${docSaveTime}`].data;

    // set the selectedPosts and selectedPostCounts to the selected doc
    setSelectedPosts(p);
    setSelectedPostCounts(pc);
  };

  return (
    <>
      <h1>user dashboard</h1>
      <FirebaseSubredditReader></FirebaseSubredditReader>
      {Object.keys(postsSnapshot).map((doc: any, docIdx: number) => (
        <React.Fragment key={docIdx}>
          <Button
            label={`${doc}`}
            onClick={() => showPosts(doc, postsSnapshot, postCountsSnapshot)}
          ></Button>
        </React.Fragment>
      ))}
      <Heatmap posts={selectedPosts} postCounts={selectedPostCounts}></Heatmap>
      <Inspector></Inspector>
    </>
  );
};

export default UserDashboard;