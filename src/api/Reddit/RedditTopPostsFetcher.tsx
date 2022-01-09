import { useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  unixToCalendarDateTime,
} from "../../helpers/UTCConversions";
import { redditTopPostsFetcherTransform } from "../../helpers/redditTopPostsFetcherTransform";


const RedditTopPostsFetcher = () => {
  const { url, setPosts } = useContext<any>(FetcherContext);

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
        const transformedPostArray = redditTopPostsFetcherTransform(topPostsArray);
        return setPosts(transformedPostArray);
      });
  }, [url]);
  return (
    <></>
  )
};

export default RedditTopPostsFetcher;
