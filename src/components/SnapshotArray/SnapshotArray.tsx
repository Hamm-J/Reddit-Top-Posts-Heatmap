import React from "react";
import Button from "../common/Button/Button";
import { SnapshotArrayContainer, Array } from "./SnapshotArray.styled";

interface ISnapshotArray {
  postsSnapshot: {};
  postCountsSnapshot: {};
  setSelectedPosts: React.Dispatch<React.SetStateAction<{}>>;
  setSelectedPostCounts: React.Dispatch<React.SetStateAction<{}>>;
  setPostsSnapshotDoc: React.Dispatch<React.SetStateAction<string>>;
  setPostCountsSnapshot: React.Dispatch<React.SetStateAction<string>>;
}

const SnapshotArray = ({
  postsSnapshot,
  postCountsSnapshot,
  setSelectedPosts,
  setSelectedPostCounts,
  setPostsSnapshotDoc,
  setPostCountsSnapshot,
}: ISnapshotArray) => {
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

    setPostsSnapshotDoc(`${subreddit}_posts_${docSaveTime}`);
    setPostCountsSnapshot(`${subreddit}_postCounts_${docSaveTime}`);
  };
  return (
    <SnapshotArrayContainer>
      <Array arrayLength={Object.keys(postsSnapshot).length}>
        {Object.keys(postsSnapshot).map((doc: any, docIdx: number) => (
          <Button
            key={docIdx}
            label={`${doc}`}
            onClick={() => showPosts(doc, postsSnapshot, postCountsSnapshot)}
            backgroundColor="orange"
            borderColor="orange"
          ></Button>
        ))}
      </Array>
    </SnapshotArrayContainer>
  );
};

export default SnapshotArray;
