import { useContext, useRef, useEffect } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  SearchSubredditContainer,
  FlexContainer,
  R,
} from "./SearchSubreddit.styled";
import InputText from "../common/InputText/InputText";
import Button from "../common/Button/Button";

const SearchSubreddit = () => {
  const {
    setTopPostsUrl,
    subreddit,
    setSubreddit,
    input,
    setInput,
    time,
    limit,
    setSelectedCell,
  } = useContext<any>(FetcherContext);

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
