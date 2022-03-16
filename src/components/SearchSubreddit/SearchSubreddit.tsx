import { useRef, useState, useEffect, useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
  Error,
} from "./SearchSubreddit.styled";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";
import useTopPostsFetcher from "../../api/Reddit/useTopPostsFetcher";

export interface ISearchSubreddit {
  setPosts: React.Dispatch<React.SetStateAction<{}>>;
  setPostCounts: React.Dispatch<any>;
}

const SearchSubreddit = ({ setPosts, setPostCounts }: ISearchSubreddit) => {
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

  // fetch top posts
  const [fetchedPosts, fetchedPostCounts] = useTopPostsFetcher(
    topPostsUrl,
    setLoading,
    setError
  );

  const searchHandler = (event: any) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    if (input == "") {
      inputFieldRef.current.focus();
      setError("Please type in a subreddit...");
    }

    // remove spaces in from input
    let inputNoSpace = input.replace(/\s/g, "");
    setSubreddit(inputNoSpace);
  };
  useEffect(() => {
    setPosts(fetchedPosts);
    setPostCounts(fetchedPostCounts);
  }, [fetchedPosts, fetchedPostCounts]);

  useEffect(() => {
    setTopPostsUrl(
      `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
    );
  }, [subreddit]);
  return (
    <SearchSubredditContainer>
      <FlexContainer>
        <R>r /</R>
        <InputText
          placeholder="search..."
          onChange={(event: void) => searchHandler(event)}
          innerRef={inputFieldRef}
          remFontSize={2}
          value={input}
          borderThickness="medium"
        />
        <Button
          label={loading ? "..." : "Search"}
          onClick={submitHandler}
          remFontSize={2}
          backgroundColor="orange"
        ></Button>
      </FlexContainer>
      {error && <Error>{error}</Error>}
    </SearchSubredditContainer>
  );
};

export default SearchSubreddit;
