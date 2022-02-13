import React, { useState } from "react";
import Button from "../../components/common/Button/Button";
import useFirebaseWriter from "./useFirebaseWriter";

interface IFirebaseSubredditWriter {
  posts: {};
  postCounts: any;
}
const FirebaseSubredditWriter = ({
  posts,
  postCounts,
}: IFirebaseSubredditWriter) => {
  const [save, setSave] = useState(false);
  const [loading, setLoading] = useState(false);

  useFirebaseWriter(save, posts, postCounts, setLoading);

  const saveSubreddit = () => {
    setSave(!save);
  };
  return (
    <Button
      label={loading ? "Saving..." : "Save Subreddit Data?"}
      onClick={saveSubreddit}
      remFontSize={1.2}
      backgroundColor="orange"
    ></Button>
  );
};

export default FirebaseSubredditWriter;
