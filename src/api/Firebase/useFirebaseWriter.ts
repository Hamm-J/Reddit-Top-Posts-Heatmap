import { useContext, useEffect, useRef } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { newDateToUTC } from "../../helpers/UTCConversions";

const useFirebaseWriter = (
  execute: boolean,
  posts: {},
  postCounts: any,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const { subreddit, user } = useContext<any>(FetcherContext);

  const firstRender = useRef(true);

  const saveTime = newDateToUTC(new Date());

  // package the posts, postCounts, and comments with `docType` property for
  // query filtering
  const postsPackaged = {
    docType: "posts",
    data: posts,
  };

  const postCountsPackaged = {
    docType: "postCounts",
    data: postCounts,
  };

  console.log("useFirebaseWriter: ");
  console.log(posts);
  console.log(subreddit);

  // const commentsPackaged = {
  //   docType: "comments",
  //   data: comments,
  // };

  const postData = async () => {
    try {
      if (auth.currentUser === null) {
        return alert("You must sign in to save the data!");
      }
      const postsSnapshotcollectionRef = doc(
        db,
        user.uid,
        `${subreddit}_posts_${saveTime}`
      );

      const postCountsSnapshotCollectionRef = doc(
        db,
        user.uid,
        `${subreddit}_postCounts_${saveTime}`
      );

      // const commentsSnapshotCollectionRef = doc(
      //   db,
      //   user.uid,
      //   `${subreddit}_comments_${saveTime}`
      // );

      // alert(
      //   `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
      //     saveTime
      //   )}`
      // );
      // setReturnMessage(
      //   `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
      //     saveTime
      //   )}`
      // );
      setLoading(true);
      await setDoc(postsSnapshotcollectionRef, postsPackaged, { merge: true });
      await setDoc(postCountsSnapshotCollectionRef, postCountsPackaged, {
        merge: true,
      });
      // await setDoc(commentsSnapshotCollectionRef, commentsPackaged, { merge: true });
      setLoading(false);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
      return;
    }
    postData();
  }, [execute]);
};

export default useFirebaseWriter;
