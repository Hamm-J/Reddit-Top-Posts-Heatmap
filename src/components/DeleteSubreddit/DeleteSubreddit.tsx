import React, { useState, useContext } from "react";
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
  const [remove, setRemove] = useState(false); // use "remove" instead of "delete" because of strictmode conventions
  const [loading, setLoading] = useState(false);

  useFirebaseDeleter(
    remove,
    db,
    user,
    postsSnapshotDoc,
    postCountsSnapshotDoc,
    setLoading,
    docDeleted,
    setDocDeleted
  );

  const deleteSubreddit = () => {
    setRemove(!remove);
  };

  return (
    <DeleteSubredditContainer>
      <Button
        label={loading ? "Deleting..." : "Delete Subreddit Data?"}
        onClick={deleteSubreddit}
        remFontSize={1.2}
        backgroundColor="orange"
        borderColor="orange"
      ></Button>
    </DeleteSubredditContainer>
  );
};

export default DeleteSubreddit;
