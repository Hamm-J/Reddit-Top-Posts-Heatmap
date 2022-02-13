import React from "react";
import Button from "../../components/common/Button/Button";

interface IFirebaseSubredditWriter {
  posts: {};
  postCounts: any;
}
const FirebaseSubredditWriter = ({
  posts,
  postCounts,
}: IFirebaseSubredditWriter) => {
  const saveSubreddit = async () => {
    console.log(posts);
    console.log(postCounts);
  };
  return (
    <Button
      label="Save Subreddit Data?"
      onClick={saveSubreddit}
      remFontSize={1.2}
      backgroundColor="orange"
    ></Button>
  );
};

export default FirebaseSubredditWriter;
