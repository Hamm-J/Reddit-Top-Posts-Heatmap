import React, { useState, useContext, useEffect } from "react";
import Button from "../common/Button/Button";
import useFirebaseWriter from "../../api/Firebase/useFirebaseWriter";
import { SaveSubredditContainer } from "./SaveSubreddit.styled";
import { FetcherContext } from "../../contexts/FetcherContext";

interface ISaveSubreddit {
  posts: {};
  postCounts: any;
}
const SaveSubreddit = ({ posts, postCounts }: ISaveSubreddit) => {
  const { user, setIsOpen, subreddit } = useContext<any>(FetcherContext);
  const [loading, setLoading] = useState(false);

  const [firebaseLoading, firebaseWriter] = useFirebaseWriter(
    user,
    subreddit,
    posts,
    postCounts
  );

  useEffect(() => {
    setLoading(firebaseLoading);
  }, [firebaseLoading]);

  const saveSubreddit = () => {
    if (user) {
      firebaseWriter();
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
