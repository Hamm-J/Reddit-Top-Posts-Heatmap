import React, { useState } from "react";
import {
  collection,
  query,
  getDocs,
  where,
  Firestore,
} from "firebase/firestore";

const useFirebaseReader = (database: Firestore, user: any) => {
  const [postsSnapshot, setPostsSnapshot] = useState({});
  const [postCountsSnapshot, setPostCountsSnapshot] = useState({});
  const [commentsSnapahot, setCommentsSnapshot] = useState({});

  const getPosts = async () => {
    try {
      const qPosts = query(
        collection(database, user.uid),
        where("docType", "==", "posts")
      );

      const querySnapshot = await getDocs(qPosts);
      const queryOrganized: any = {};

      querySnapshot.forEach((doc: any) => {
        // use Firebase's indexes "id" and ".data()" to get the info off the query
        queryOrganized[doc.id] = doc.data();
      });

      setPostsSnapshot(queryOrganized);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  const getPostCounts = async () => {
    try {
      const qPostCounts = query(
        collection(database, user.uid),
        where("docType", "==", "postCounts")
      );

      const querySnapshot = await getDocs(qPostCounts);
      const queryOrganized: any = {};

      querySnapshot.forEach((doc: any) => {
        // use Firebase's indexes "id" and ".data()" to get the info off the query
        queryOrganized[doc.id] = doc.data();
      });

      setPostCountsSnapshot(queryOrganized);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  const getComments = async () => {
    const qComments = query(
      collection(database, user.uid),
      where("docType", "==", "comments")
    );
    const querySnapshot = await getDocs(qComments);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setCommentsSnapshot(queryOrganized);
  };

  return [
    postsSnapshot,
    postCountsSnapshot,
    commentsSnapahot,
    () => {
      getPosts();
      getPostCounts();
      getComments();
    },
  ] as const;
};

export default useFirebaseReader;
