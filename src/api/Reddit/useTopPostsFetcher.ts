import { useState, useEffect, useRef } from "react";
import { unixToDayHour } from "../../helpers/UTCConversions";

const useTopPostsFetcher = (
  url: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string>>,
  refetch?: boolean
) => {
  const [posts, setPosts] = useState({});
  const [postCounts, setPostCounts] = useState({});

  const firstRender = useRef(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response: any = await fetch(url);
      console.log(response);

      const data = await response.json();
      console.log(data);

      const topPostsArray = data.data.children;
      const transformedPosts = transformData(topPostsArray);
      const postCounts = getPostCounts(transformedPosts);

      setPosts(transformedPosts);
      setPostCounts(postCounts);

      setLoading(false);
      setError("");

      // return response;
    } catch (error: any) {
      setLoading(false);
      console.error(error.message);

      switch (error.message) {
        case "Failed to fetch":
          setError("Sorry could not find that subreddit...");
          break;
        default:
          setError("Oops. There was an error. Please try again...");
      }

      // setError(error.message);
    }
  };

  const transformData = (responseArray: any[]) => {
    let data: any = {};

    responseArray.forEach((obj) => {
      let post = obj.data;
      let postDate = unixToDayHour(post.created_utc);

      // cast all of the fields to string to avoid Firebase POSTing problems
      let postFieldsOfInterest = {
        // subreddit info
        subreddit: String(post.subreddit),
        subredditId: String(post.subreddit_id),
        subredditNamePrefixed: String(post.subreddit_name_prefixed),
        subredditSubscribers: String(post.subreddit_subscribers),

        // post info
        author: String(post.author),
        date: String(post.created_utc),
        id: String(post.id),
        title: String(post.title),
        permalink: String(post.permalink),
        url: String(post.url),
        thumbnail: String(post.thumbnail),
        thumbnailHeight: String(post.thumbnail_height),
        thumbnailWidth: String(post.thumbnail_width),

        // post stats
        ups: String(post.ups),
        upvoteRatio: String(post.upvote_ratio),
        totalAwardsReceived: String(post.total_awards_received),
        numComments: String(post.num_comments),
        pinned: String(post.pinned),

        postHint: String(post.post_hint),
        stickied: String(post.stickied),
        spoiler: String(post.spoiler),
      };

      if (!data[postDate]) {
        data[postDate] = [postFieldsOfInterest];
      } else {
        data[postDate].push(postFieldsOfInterest);
      }
    });
    return data;
  };

  const getPostCounts = (posts: any) => {
    let counts: any = {};

    for (let postDate in posts) {
      counts[postDate] = posts[postDate].length;
    }
    return counts;
  };

  useEffect(() => {
    // prevent execution on inital render
    if (firstRender.current == true) {
      firstRender.current = false;
      return;
    }
    fetchData();
  }, [url, refetch]);

  return [posts, postCounts];
};

export default useTopPostsFetcher;
