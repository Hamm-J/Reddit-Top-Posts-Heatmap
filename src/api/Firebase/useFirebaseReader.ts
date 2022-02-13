import {
  collection,
  query,
  getDocs,
  where,
  Firestore,
} from "firebase/firestore";
import { useEffect } from "react";

const useFirebaseReader = (
  database: Firestore,
  user: any,
  setPostsSnapshot: React.Dispatch<React.SetStateAction<{}>>,
  setPostCountsSnapshot: React.Dispatch<React.SetStateAction<{}>>,
  setCommentsSnapshot: React.Dispatch<React.SetStateAction<{}>>
) => {
  const getPosts = async () => {
    try {
      const qPosts = query(
        collection(database, user.uid),
        where("docType", "==", "posts")
      );

      const querySnapshot = await getDocs(qPosts);
      const queryOrganized: any = {};

      querySnapshot.forEach((doc: any) => {
        // use Firebase's indexes "id" and ".data()" to get the info off the query
        queryOrganized[doc.id] = doc.data();
      });

      setPostsSnapshot(queryOrganized);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  const getPostCounts = async () => {
    try {
      const qPostCounts = query(
        collection(database, user.uid),
        where("docType", "==", "postCounts")
      );

      const querySnapshot = await getDocs(qPostCounts);
      const queryOrganized: any = {};

      querySnapshot.forEach((doc: any) => {
        // use Firebase's indexes "id" and ".data()" to get the info off the query
        queryOrganized[doc.id] = doc.data();
      });

      setPostCountsSnapshot(queryOrganized);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  const getComments = async () => {
    const qComments = query(
      collection(database, user.uid),
      where("docType", "==", "comments")
    );
    const querySnapshot = await getDocs(qComments);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setCommentsSnapshot(queryOrganized);
  };

  useEffect(() => {
    getPosts();
    getPostCounts();
    getComments();
  }, [user]);
};

export default useFirebaseReader;
