import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
} from "./SearchSubreddit.styled";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";

const SearchSubreddit = () => {
  const { setTopPostsUrl, subreddit, setSubreddit, time, limit } =
    useContext<any>(FetcherContext);

  const searchHandler = (event: any) => {
    setSubreddit(event.target.value);
  };

  const submitHandler = () => {
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
        />
        <Button label="Search" onClick={submitHandler}></Button>
      </FlexContainer>
    </SearchSubredditContainer>
  );
};

export default SearchSubreddit;
