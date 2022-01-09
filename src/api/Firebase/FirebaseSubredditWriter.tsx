import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";

const FirebaseSubredditWriter = () => {
  const { posts, subreddit } = useContext<any>(FetcherContext);

  const createSubreddit = async () => {
    const saveTime = newDateToUTC(new Date());

    const subredditSnapshotsCollectionRef = doc(
      db,
      "subreddit_snapshots",
      `${subreddit}_${saveTime}`
    ); 

    alert(
      `Saved Subreddit: "${subreddit}" data at ${unixToCalendarDateTime(
        saveTime
      )}`
    );
    setDoc(subredditSnapshotsCollectionRef, posts, { merge: true });
  };

  return (
    <>
      <button onClick={createSubreddit}>Save Post Data</button>
    </>
  );
};

export default FirebaseSubredditWriter;
