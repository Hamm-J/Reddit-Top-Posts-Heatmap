import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { newDateToUnix } from "../../helpers/UTCConversions";

const useFirebaseWriter = (
  user: any,
  subreddit: string,
  posts: {},
  postCounts: any
) => {
  const [loading, setLoading] = useState(false);

  const saveTime = newDateToUnix(new Date());

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

  // const commentsPackaged = {
  //   docType: "comments",
  //   data: comments,
  // };

  return [
    loading,
    async () => {
      try {
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
        await setDoc(postsSnapshotcollectionRef, postsPackaged, {
          merge: true,
        });
        await setDoc(postCountsSnapshotCollectionRef, postCountsPackaged, {
          merge: true,
        });
        // await setDoc(commentsSnapshotCollectionRef, commentsPackaged, { merge: true });
        setLoading(false);
      } catch (error: any) {
        console.log(error.message, error.stack);
      }
    },
  ] as const;
};

export default useFirebaseWriter;
