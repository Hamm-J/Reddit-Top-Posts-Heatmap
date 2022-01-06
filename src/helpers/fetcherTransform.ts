import { unixToDayHour } from "./UTCConversions";

export const fetcherTransform = (responseArray: any[]) => {
  let results: any = {};

  responseArray.forEach((obj) => {
    let post = obj.data;
    let postDate = unixToDayHour(post.created_utc);
    let postFieldsOfInterest = {
      date: post.created_utc,
      title: post.title,
      permalink: post.permalink,
      url: post.url,
      ups: post.ups,
      upvoteRatio: post.upvote_ratio,
      totalAwardsReceived: post.total_awards_received,
      numComments: post.num_comments,
      pinned: post.pinned,
      postHint: post.post_hint,
      stickied: post.stickied,
      spoiler: post.spoiler,
    };

    if (!results[postDate]) {
      results[postDate] = [postFieldsOfInterest];
    } else {
      results[postDate].push(postFieldsOfInterest);
    }
  });
  console.log("from fetcherTransform");
  console.log(results);
  return results; // hash map
};
