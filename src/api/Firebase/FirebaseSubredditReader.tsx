import React from "react";
import Button from "../../components/common/Button/Button";

interface IFirebaseSubredditReader {
  postsSnapshot: {};
  postCountsSnapshot: {};
  setSelectedPosts: React.Dispatch<React.SetStateAction<{}>>;
  setSelectedPostCounts: React.Dispatch<React.SetStateAction<{}>>;
}

const FirebaseSubredditReader = ({
  postsSnapshot,
  postCountsSnapshot,
  setSelectedPosts,
  setSelectedPostCounts,
}: IFirebaseSubredditReader) => {
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
      {Object.keys(postsSnapshot).map((doc: any, docIdx: number) => (
        <React.Fragment key={docIdx}>
          <Button
            label={`${doc}`}
            onClick={() => showPosts(doc, postsSnapshot, postCountsSnapshot)}
          ></Button>
        </React.Fragment>
      ))}
    </>
  );
};

export default FirebaseSubredditReader;
