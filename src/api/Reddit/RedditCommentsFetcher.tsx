import { useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";

const RedditCommentsFetcher = () => {
  const { posts, subreddit, setComments } = useContext<any>(FetcherContext);

  const fetchComments = async (posts: any) => {
    try {
      let promises = [];

      for (let postDate in posts) {
        for (let post in posts[postDate]) {
          const response = fetch(
            // fetch comments for each top post using the top post's id
            `https://www.reddit.com/r/${subreddit}/comments/${posts[postDate][post].id}.json`
          );
          promises.push(response);
        }
      }
      const promiseAll = await Promise.all(promises);
      const jsonAll = await Promise.all(
        promiseAll.map((p) => {
          return p.json();
        })
      );
      let postComments: any = {};

      // get the comments' fields of interest from the json
      jsonAll.forEach((obj) => {
        let postId = obj[0].data.children[0].data.id;
        let arrayOfComments = obj[1].data.children;

        for (let comment in arrayOfComments) {
          let commentFieldsOfInterest = {
            id: arrayOfComments[comment].data.id,
            permalink: arrayOfComments[comment].data.permalink,
            author: arrayOfComments[comment].data.author,
            created_utc: arrayOfComments[comment].data.created_utc,
            ups: arrayOfComments[comment].data.ups,
            downs: arrayOfComments[comment].data.downs,
            body: arrayOfComments[comment].data.body,
          };
          if (!postComments[postId]) {
            postComments[postId] = [commentFieldsOfInterest];
          } else {
            postComments[postId].push(commentFieldsOfInterest);
          }
        }
      });

      setComments(postComments);
    } catch (error: any) {
      console.log(error.message, error.stack);
    }
  };

  useEffect(() => {
    fetchComments(posts);
  }, [posts]);
  return <></>;
};
export default RedditCommentsFetcher;
