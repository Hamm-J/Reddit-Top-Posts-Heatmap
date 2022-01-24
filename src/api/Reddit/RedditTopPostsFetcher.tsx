import { useEffect, useContext, useRef, useMemo } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { unixToDayHour } from "../../helpers/UTCConversions";

const RedditTopPostsFetcher = () => {
  const { topPostsUrl, setPosts, setPostCounts, setShowLanding } =
    useContext<any>(FetcherContext);

  const fetchData = async () => {
    try {
      const response: any = await fetch(topPostsUrl);
      return response;
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
        subreddit: post.subreddit,
        subredditId: post.subreddit_id,
        subredditNamePrefixed: post.subreddit_name_prefixed,
        subredditSubscribers: post.subreddit_subscribers,

        // post info
        author: post.author,
        date: post.created_utc,
        id: post.id,
        title: post.title,
        permalink: post.permalink,
        url: post.url,
        thumbnail: post.thumbnail,
        thumbnailHeight: post.thumbnail_height,
        thumbnailWidth: post.thumbnail_width,

        // post stats
        ups: post.ups,
        upvoteRatio: post.upvote_ratio,
        totalAwardsReceived: post.total_awards_received,
        numComments: post.num_comments,
        pinned: post.pinned,
        // cast to string so that `undefined` can be POSTed to firestore
        postHint: String(post.post_hint),
        stickied: post.stickied,
        spoiler: post.spoiler,
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

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fetchData()
      .then((response) => {
        const data = response.json();
        return data;
      })
      .then((data) => {
        const topPostsArray = data.data.children;
        const transformedPosts = transformData(topPostsArray);
        const postCounts = getPostCounts(transformedPosts);
        setPosts(transformedPosts);
        setPostCounts(postCounts);
        setShowLanding(false);
      });
  }, [topPostsUrl]);
  return <></>;
};

export default RedditTopPostsFetcher;
