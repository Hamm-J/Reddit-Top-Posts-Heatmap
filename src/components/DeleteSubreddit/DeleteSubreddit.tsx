import React, { useState, useContext, useEffect } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { DeleteSubredditContainer } from "./DeleteSubreddit.styled";
import Button from "../common/Button/Button";
import useFirebaseDeleter from "../../api/Firebase/useFirebaseDeleter";
import { db } from "../../firebase-config";

interface IDeleteSubreddit {
  postsSnapshotDoc: string;
  postCountsSnapshotDoc: string;
  docDeleted: boolean;
  setDocDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteSubreddit = ({
  postsSnapshotDoc,
  postCountsSnapshotDoc,
  docDeleted,
  setDocDeleted,
}: IDeleteSubreddit) => {
  const { user } = useContext<any>(FetcherContext);
  const [loading, setLoading] = useState(false);

  const [firebaseLoading, firebaseDeleter] = useFirebaseDeleter(
    db,
    user,
    postsSnapshotDoc,
    postCountsSnapshotDoc,
    docDeleted,
    setDocDeleted
  );

  useEffect(() => {
    setLoading(firebaseLoading);
  }, [firebaseLoading]);

  const deleteSubreddit = () => {
    firebaseDeleter();
  };

  return (
    <DeleteSubredditContainer>
      <Button
        label={loading ? "Deleting..." : "Delete Subreddit Data?"}
        onClick={deleteSubreddit}
        loading={loading}
        remFontSize={1.2}
        backgroundColor="orange"
        borderColor="orange"
        minWidth={241}
      ></Button>
    </DeleteSubredditContainer>
  );
};

export default DeleteSubreddit;
