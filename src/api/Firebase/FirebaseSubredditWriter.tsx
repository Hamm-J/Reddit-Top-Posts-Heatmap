import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";
import Button from "../../components/common/Button/Button";

const FirebaseSubredditWriter = () => {
  const { posts, postCounts, comments, subreddit, user } =
    useContext<any>(FetcherContext);

  const createSubreddit = async () => {
    if (auth.currentUser === null) {
      return alert("You must sign in to save the data!");
    }

    const saveTime = newDateToUTC(new Date());

    const postsSnapshotsCollectionRef = doc(
      db,
      user.uid,
      `${subreddit}_posts_${saveTime}`
    );

    const postCountsSnapshotsCollectionRef = doc(
      db,
      user.uid,
      `${subreddit}_post_counts_${saveTime}`
    );

    const commentsSnapshotCollectionRef = doc(
      db,
      user.uid,
      `${subreddit}_comments_${saveTime}`
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
