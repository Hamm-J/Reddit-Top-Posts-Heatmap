import { useEffect, useContext, useRef, useMemo } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { unixToDayHour } from "../../helpers/UTCConversions";
import { ISearchSubreddit } from "../../components/SearchSubreddit/SearchSubreddit";
interface IRedditTopPostsFetcher {
  topPostsUrl: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHeatmap: ISearchSubreddit["setShowHeatmap"];
}

const RedditTopPostsFetcher = ({
  topPostsUrl,
  setLoading,
  setShowHeatmap,
}: IRedditTopPostsFetcher) => {
  const {
    // topPostsUrl,
    setPosts,
    setPostCounts,
    // setShowHeatmap,
    // setLoading,
    // loading,
  } = useContext<any>(FetcherContext);

  // console.log(loading);
  const fetchData = async () => {
    try {
      setLoading(true);

      const response: any = await fetch(topPostsUrl);
      console.log(response);

      const data = await response.json();

      const topPostsArray = data.data.children;
      const transformedPosts = transformData(topPostsArray);
      const postCounts = getPostCounts(transformedPosts);

      setPosts(transformedPosts);
      setPostCounts(postCounts);
      setShowHeatmap(true);

      setLoading(false);

      // return response;
    } catch (error: any) {
      console.error(error.message, error.stack);
    }
  };

  const transformData = (responseArray: any[]) => {
    let data: any = {};

    responseArray.forEach((obj) => {
      let post = obj.data;
      let postDate = unixToDayHour(post.created_utc);
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

  const firstUpdate = useRef(true);

  console.log(firstUpdate);
  console.log("rendered");
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchData();
  }, [topPostsUrl]);
  return <></>;
};

export default RedditTopPostsFetcher;
