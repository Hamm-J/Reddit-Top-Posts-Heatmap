import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";

const FirebaseSubredditWriter = () => {
  const { posts, postCounts, comments, subreddit } =
    useContext<any>(FetcherContext);

  const createSubreddit = async () => {
    const saveTime = newDateToUTC(new Date());

    const postsSnapshotsCollectionRef = doc(
      db,
      "subreddit_posts_snapshots",
      `${subreddit}_${saveTime}`
    );

    const postCountsSnapshotsCollectionRef = doc(
      db,
      "subreddit_post_counts_snapshots",
      `${subreddit}_${saveTime}`
    );

    const commentsSnapshotCollectionRef = doc(
      db,
      "subreddit_comments_snapshots",
      `${subreddit}_${saveTime}`
    );

    alert(
      `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
        saveTime
      )}`
    );
    setDoc(postsSnapshotsCollectionRef, posts, { merge: true });
    setDoc(postCountsSnapshotsCollectionRef, postCounts, { merge: true });
    setDoc(commentsSnapshotCollectionRef, comments, { merge: true });
  };

  return (
    <>
      <button onClick={createSubreddit}>Save Post Data</button>
    </>
  );
};

export default FirebaseSubredditWriter;
