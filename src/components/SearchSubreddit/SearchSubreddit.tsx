import { useRef, useState, useContext, useEffect } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
  Error,
} from "./SearchSubreddit.styled";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";
import LoadingIcon from "../common/LoadingIcon/LoadingIcon";
import useTopPostsFetcher from "../../api/Reddit/useTopPostsFetcher";

export interface ISearchSubreddit {
  handlePosts: ({}) => void;
  handlePostCounts: ({}) => void;
}

const SearchSubreddit = ({
  handlePosts,
  handlePostCounts,
}: ISearchSubreddit) => {
  // fetcher URL states
  // const [subreddit, setSubreddit] = useState("");
  const { subreddit, setSubreddit } = useContext<any>(FetcherContext);
  const [time, setTime] = useState("month");
  const [limit, setLimit] = useState(100);
  const [topPostsUrl, setTopPostsUrl] = useState(
    `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
  );

  console.log(topPostsUrl);
  // state of the current input value
  const [input, setInput] = useState("");

  // state of if RedditTopPostsFetcher is fetching the posts
  const [loading, setLoading] = useState(false);

  // state of error for error handling
  const [error, setError] = useState("");

  // ref for targeting the input field
  const inputFieldRef = useRef<any>("");

  const [
    redditPosts,
    redditPostCounts,
    redditLoading,
    redditError,
    topPostsFetcher,
  ] = useTopPostsFetcher(topPostsUrl);

  useEffect(() => {
    handlePosts(redditPosts);
    handlePostCounts(redditPostCounts);
    setLoading(redditLoading);
    setError(redditError);
  }, [redditPosts, redditPostCounts, redditLoading, redditError]);

  const searchHandler = (event: any) => {
    const { value } = event.target;
    setInput(value);

    let inputNoSpace = value.replace(/\s/g, "");
    setTopPostsUrl(
      `https://www.reddit.com/r/${inputNoSpace}/top.json?t=${time}&limit=${limit}`
    );
  };

  const submitHandler = () => {
    if (input === "") {
      inputFieldRef.current.focus();
      setError("Please type in a subreddit...");
    }

    // remove spaces in from input
    let inputNoSpace = input.replace(/\s/g, "");
    setInput(inputNoSpace);
    setSubreddit(inputNoSpace);
    topPostsFetcher();
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <SearchSubredditContainer>
      <FlexContainer>
        <R>r /</R>
        <InputText
          type="text"
          placeholder="Subreddit..."
          onChange={(event: void) => searchHandler(event)}
          onKeyPress={(event: void) => handleKeyPress(event)}
          innerRef={inputFieldRef}
          remFontSize={2}
          value={input}
          borderThickness="medium"
        />
        <Button
          label={
            loading ? <LoadingIcon sizePixels={20} color="white" /> : "Search"
          }
          // label={<LoadingIcon sizePixels={30} color="white" />}
          onClick={() => submitHandler()}
          loading={loading}
          remFontSize={2}
          backgroundColor="orange"
          borderColor="orange"
          minWidth={128}
          minHeight={53}
        ></Button>
      </FlexContainer>
      {error && <Error>{error}</Error>}
    </SearchSubredditContainer>
  );
};

export default SearchSubreddit;
