import React, { useContext, useEffect } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase-config";

import Button from "../../components/common/Button/Button";

const FirebaseSubredditReader = () => {
  const {
    user,
    postsSnapshot,
    setPostsSnapshot,
    postCountsSnapshot,
    setPostCountsSnapshot,
    commentsSnapshot,
    setCommentsShapshot,
  } = useContext<any>(FetcherContext);

  const getPosts = async () => {
    const qPosts = query(
      collection(db, user.uid),
      where("docType", "==", "posts")
    );

    const querySnapshot = await getDocs(qPosts);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setPostsSnapshot(queryOrganized);
  };

  const getPostCounts = async () => {
    const qPostCounts = query(
      collection(db, user.uid),
      where("docType", "==", "postCounts")
    );

    const querySnapshot = await getDocs(qPostCounts);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setPostCountsSnapshot(queryOrganized);
  };

  const getComments = async () => {
    const qComments = query(
      collection(db, user.uid),
      where("docType", "==", "comments")
    );

    const querySnapshot = await getDocs(qComments);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setCommentsShapshot(queryOrganized);
  };

  const allSnapshots = () => {
    getPosts();
    getPostCounts();
    getComments();
  };

  useEffect(() => {
    allSnapshots();
  }, []);

  return (
    <div>
      <p>firebase subreddit reader</p>
      <Button label="get docs" onClick={allSnapshots}></Button>
    </div>
  );
};

export default FirebaseSubredditReader;
