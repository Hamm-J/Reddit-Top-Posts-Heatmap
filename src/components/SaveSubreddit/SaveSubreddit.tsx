import React, { useState, useContext, useEffect } from "react";
import Button from "../common/Button/Button";
import useFirebaseWriter from "../../api/Firebase/useFirebaseWriter";
import { SaveSubredditContainer } from "./SaveSubreddit.styled";
import { FetcherContext } from "../../contexts/FetcherContext";
import LoadingIcon from "../../components/common/LoadingIcon/LoadingIcon";

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
        label={
          loading ? (
            <>
              <span>Saving...</span>
              <LoadingIcon sizePixels={20} color="white" />
            </>
          ) : (
            "Save Subreddit Data?"
          )
        }
        onClick={() => saveSubreddit()}
        loading={loading}
        remFontSize={1.2}
        backgroundColor="orange"
        borderColor="orange"
        minWidth={226}
      ></Button>
    </SaveSubredditContainer>
  );
};

export default SaveSubreddit;
