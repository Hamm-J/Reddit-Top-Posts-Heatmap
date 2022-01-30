import React, { useContext, useEffect, useState } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

import Button from "../../components/common/Button/Button";

const FirebaseSubredditReader = () => {
  const { user } = useContext<any>(FetcherContext);
  const [snapshot, setSnapshot] = useState<any>({});

  const getSubreddit = async () => {
    const q = query(collection(db, user.uid));

    const querySnapshot = await getDocs(q);
    const queryOrganized: any = {};

    querySnapshot.forEach((doc: any) => {
      // use Firebase's indexes "id" and ".data()" to get the info off the query
      queryOrganized[doc.id] = doc.data();
    });

    setSnapshot(queryOrganized);
  };

  useEffect(() => {
    getSubreddit();
  }, []);

  console.log(snapshot);
  return (
    <div>
      <p>firebase subreddit reader</p>
      <Button label="get docs" onClick={getSubreddit}></Button>
      {Object.keys(snapshot).map((doc: any, docIdx: number) => (
        <React.Fragment key={docIdx}>
          <p>{doc}</p>
        </React.Fragment>
      ))}
    </div>
  );
};

export default FirebaseSubredditReader;
