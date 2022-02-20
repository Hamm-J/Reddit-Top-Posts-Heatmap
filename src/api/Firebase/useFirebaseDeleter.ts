import React, { useEffect, useRef } from "react";
import { doc, deleteDoc, Firestore } from "firebase/firestore";

const useFirebaseDeleter = (
  execute: boolean,
  database: Firestore,
  user: any,
  postsSnapshotDoc: string,
  postCountsSnapshotDoc: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const firstRender = useRef(true);

  const deletePostsSnapshot = async () => {
    try {
      setLoading(true);
      await deleteDoc(doc(database, user.uid, postsSnapshotDoc));
      setLoading(false);
    } catch (error: any) {
      console.log(error.message, error.stack);
      setLoading(false);
    }
  };

  const deletePostCountsSnapshot = async () => {
    try {
      setLoading(true);
      await deleteDoc(doc(database, user.uid, postCountsSnapshotDoc));
      setLoading(false);
    } catch (error: any) {
      console.log(error.message, error.stack);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
      return;
    }
    deletePostsSnapshot();
    deletePostCountsSnapshot();
    console.log("delete");
    console.log(user.uid);
    console.log(postsSnapshotDoc);
    console.log(postCountsSnapshotDoc);
  }, [execute]);
};

// await deleteDoc(doc(db, "cities", "DC"));

export default useFirebaseDeleter;
