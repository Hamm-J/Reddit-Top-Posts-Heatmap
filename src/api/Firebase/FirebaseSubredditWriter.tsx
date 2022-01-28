import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";
import Button from "../../components/common/Button/Button";

const FirebaseSubredditWriter = () => {
  const { posts, postCounts, comments, subreddit, user } =
    useContext<any>(FetcherContext);

  const createSubreddit = async () => {
    const saveTime = newDateToUTC(new Date());

    const postsSnapshotsCollectionRef = doc(
      db,
      `${user?.uid}_subreddit_posts_snapshots`,
      `${subreddit}_${saveTime}`
    );

    const postCountsSnapshotsCollectionRef = doc(
      db,
      `${user?.uid}_subreddit_post_counts_snapshots`,
      `${subreddit}_${saveTime}`
    );

    const commentsSnapshotCollectionRef = doc(
      db,
      `${user?.uid}_subreddit_comments_snapshots`,
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
      {/* <button onClick={createSubreddit}>Save Post Data</button> */}
      <Button
        label="Save Subreddit Data?"
        onClick={createSubreddit}
        remFontSize={1.2}
        backgroundColor="orange"
      ></Button>
    </>
  );
};

export default FirebaseSubredditWriter;
