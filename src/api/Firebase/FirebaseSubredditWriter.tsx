import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";

const FirebaseSubredditWriter = () => {
  const { posts, postCounts, subreddit } = useContext<any>(FetcherContext);

  const createSubreddit = async () => {
    const saveTime = newDateToUTC(new Date());

    const subredditDataSnapshotsCollectionRef = doc(
      db,
      "subreddit_data_snapshots",
      `${subreddit}_${saveTime}`
    );

    const subredditCountsSnapshotsCollectionRef = doc(
      db,
      "subreddit_counts_snapshots",
      `${subreddit}_${saveTime}`
    );

    alert(
      `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
        saveTime
      )}`
    );
    setDoc(subredditDataSnapshotsCollectionRef, posts, { merge: true });
    setDoc(subredditCountsSnapshotsCollectionRef, postCounts, { merge: true });
  };

  return (
    <>
      <button onClick={createSubreddit}>Save Post Data</button>
    </>
  );
};

export default FirebaseSubredditWriter;
