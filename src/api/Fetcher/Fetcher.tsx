import { useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";
import { fetcherTransform } from "../../helpers/fetcherTransform";


const Fetcher = () => {
  const { url, posts, setPosts } = useContext<any>(FetcherContext);

  const redditFetcher = async () => {
    const response = await fetch(url);
    return response;
  };

  useEffect(() => {
    redditFetcher()
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        const topPostsArray = data.data.children;
        const arrayLength = data.data.dist;
        console.log('from Fetcher')
        console.log(arrayLength);
        console.log(topPostsArray);
        setPosts(topPostsArray);
        const transformedPostArray = fetcherTransform(topPostsArray);
        return transformedPostArray; 
      });
  }, [url]);

  return (
    <>
      {posts.map((post: any, postIdx: any) => (
        // <div key={postIdx}>{post.data.permalink}</div>
        <div key={postIdx}>
          {unixToCalendarDateTime(post.data.created_utc)}
        </div>
      ))}
    </>
  );
};

export default Fetcher;
