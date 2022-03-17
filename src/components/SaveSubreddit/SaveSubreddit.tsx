import React, { useState, useContext } from "react";
import Button from "../common/Button/Button";
import useFirebaseWriter from "../../api/Firebase/useFirebaseWriter";
import { SaveSubredditContainer } from "./SaveSubreddit.styled";
import { FetcherContext } from "../../contexts/FetcherContext";

interface ISaveSubreddit {
  posts: {};
  postCounts: any;
}
const SaveSubreddit = ({ posts, postCounts }: ISaveSubreddit) => {
  const { user, setIsOpen } = useContext<any>(FetcherContext);
  const [save, setSave] = useState(false);
  const [loading, setLoading] = useState(false);

  useFirebaseWriter(save, posts, postCounts, setLoading);

  const saveSubreddit = () => {
    if (user) {
      setSave(!save);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <SaveSubredditContainer>
      <Button
        label={loading ? "Saving..." : "Save Subreddit Data?"}
        onClick={() => saveSubreddit()}
        remFontSize={1.2}
        backgroundColor="orange"
        borderColor="orange"
        minWidth={226}
      ></Button>
    </SaveSubredditContainer>
  );
};

export default SaveSubreddit;
