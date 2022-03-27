import React, { useState } from "react";
import { doc, deleteDoc, Firestore } from "firebase/firestore";

const useFirebaseDeleter = (
  database: Firestore,
  user: any,
  postsSnapshotDoc: string,
  postCountsSnapshotDoc: string,
  docDeleted: boolean,
  setDocDeleted: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [loading, setLoading] = useState(false);
  return [
    loading,
    async () => {
      try {
        setLoading(true);
        await deleteDoc(doc(database, user.uid, postsSnapshotDoc));
        await deleteDoc(doc(database, user.uid, postCountsSnapshotDoc));
        setLoading(false);
        setDocDeleted(!docDeleted);
      } catch (error: any) {
        console.log(error.message, error.stack);
        setLoading(false);
      }
    },
  ] as const;
};

// await deleteDoc(doc(db, "cities", "DC"));

export default useFirebaseDeleter;
