import { useContext, useRef } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
} from "./SearchSubreddit.styled";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";

const SearchSubreddit = () => {
  const { setTopPostsUrl, subreddit, setSubreddit, time, limit } =
    useContext<any>(FetcherContext);

  const inputRef = useRef<any>("");

  const searchHandler = (event: any) => {
    setSubreddit(event.target.value);
  };

  const submitHandler = () => {
    if (subreddit == "") {
      inputRef.current.focus();
      return alert("Please enter a subreddit to search.");
    }

    setTopPostsUrl(
      `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
    );
  };
  return (
    <SearchSubredditContainer>
      <FlexContainer>
        <R>r /</R>
        <InputText
          placeholder="search..."
          onChange={(event: void) => searchHandler(event)}
          innerRef={inputRef}
          remFontSize={2}
          value={subreddit}
          borderThickness="medium"
        />
        <Button
          label="Search"
          onClick={submitHandler}
          remFontSize={2}
          backgroundColor="orange"
        ></Button>
      </FlexContainer>
    </SearchSubredditContainer>
  );
};

export default SearchSubreddit;
