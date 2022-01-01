import { useEffect, useState } from "react";

const Fetcher = () => {
  const subreddit = "halo";
  const time = "month";
  const limit = 100;
  const url = `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`;

  const [posts, setPosts] = useState([]);

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
      })
  }, []);

  return (
    <>
      { posts.map((post:any, postIdx:any) => ( 
            <div key={postIdx}>{post.data.permalink}</div>
        ))} 
    </>
  );
};

export default Fetcher;
