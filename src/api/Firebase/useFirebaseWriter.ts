import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import {
  newDateToUTC,
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";

const useFirebaseWriter = (posts: {}, postCounts: any) => {};

export default useFirebaseWriter;
