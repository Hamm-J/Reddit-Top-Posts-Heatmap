import React, { useState } from "react";
import Button from "../common/Button/Button";
import useFirebaseWriter from "../../api/Firebase/useFirebaseWriter";

interface ISaveSubreddit {
  posts: {};
  postCounts: any;
}
const SaveSubreddit = ({ posts, postCounts }: ISaveSubreddit) => {
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

export default SaveSubreddit;
