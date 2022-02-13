import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";

const useFirebaseWriter = (posts: {}, postCounts: any) => {
  const { subreddit, user } = useContext<any>(FetcherContext);

  if (auth.currentUser === null) {
    return alert("You must sign in to save the data!");
  }

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

  // const commentsPackaged = {
  //   docType: "comments",
  //   data: comments,
  // };

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

  alert(
    `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
      saveTime
    )}`
  );
  setDoc(postsSnapshotcollectionRef, postsPackaged, { merge: true });
  setDoc(postCountsSnapshotCollectionRef, postCountsPackaged, {
    merge: true,
  });
  // setDoc(commentsSnapshotCollectionRef, commentsPackaged, { merge: true });
};

export default useFirebaseWriter;
