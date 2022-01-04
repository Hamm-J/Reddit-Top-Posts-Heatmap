import { useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  unixToTime,
  unixToWeekDay,
  unixToCalendarDate,
} from "../../helpers/UTCConversions";

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
        console.log(arrayLength);
        console.log(topPostsArray);

        setPosts(topPostsArray);
        return topPostsArray;
      });
  }, [url]);

  return (
    <>
      {posts.map((post: any, postIdx: any) => (
        // <div key={postIdx}>{post.data.permalink}</div>
        <div key={postIdx}>
          {unixToTime(post.data.created_utc)}
          {unixToWeekDay(post.data.created_utc)}
          {unixToCalendarDate(post.data.created_utc)}
        </div>
      ))}
    </>
  );
};

export default Fetcher;
