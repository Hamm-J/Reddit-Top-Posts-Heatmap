import { useRef, useState, useEffect } from "react";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
} from "./SearchSubreddit.styled";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";
import RedditTopPostsFetcher from "../../api/Reddit/RedditTopPostsFetcher";

interface ISearchSubreddit {
  setSelectedCell: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchSubreddit = ({ setSelectedCell }: ISearchSubreddit) => {
  // fetcher URL states
  const [topPostsUrl, setTopPostsUrl] = useState("");
  const [subreddit, setSubreddit] = useState("");
  const [time, setTime] = useState("month");
  const [limit, setLimit] = useState(100);

  // state of the current input value
  const [input, setInput] = useState("");

  // state of if RedditTopPostsFetcher is fetching the posts
  const [loading, setLoading] = useState(false);

  // ref for targeting the input field
  const inputFieldRef = useRef<any>("");

  const searchHandler = (event: any) => {
    setInput(event.target.value);
  };

  const submitHandler = () => {
    if (input == "") {
      inputFieldRef.current.focus();
      return alert("Please enter a subreddit to search.");
    }

    setSubreddit(input);
  };

  useEffect(() => {
    setTopPostsUrl(
      `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
    );

    // set the selected heatmap cell to [] again so that the inspector does not
    // show
    setSelectedCell([]);
  }, [subreddit]);
  return (
    <SearchSubredditContainer>
      <RedditTopPostsFetcher
        topPostsUrl={topPostsUrl}
        setLoading={setLoading}
      ></RedditTopPostsFetcher>
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
    </SearchSubredditContainer>
  );
};

export default SearchSubreddit;
