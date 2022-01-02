import { useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";

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
        <div key={postIdx}>{post.data.permalink}</div>
      ))}
    </>
  );
};

export default Fetcher;
