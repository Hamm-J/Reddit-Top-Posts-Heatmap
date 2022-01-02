import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { Nav } from "./Navbar.styled";
import InputText from "../InputText/InputText";
import Radio from "../Radio/Radio";
import InputNumber from "../InputNumber/InputNumber";
import Button from "../Button/Button";

const Navbar = () => {
  const { url,setUrl, subreddit, setSubreddit, time, setTime, limit, setLimit } =
    useContext<any>(FetcherContext);

  const searchHandler = (event: any) => {
    setSubreddit(event.target.value);
    console.log(event.target.value);
  };

  const limitHandler = (event: any) => {
    setLimit(event.target.value);
    console.log(event.target.value);
  };

  const timeHandler = (event: any) => {
    setTime(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = () => {
    setUrl(
      `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=${limit}`
    );
    console.log(url);
    console.log('clicked');
  };
  return (
    <Nav>
      <InputText placeholder="search..." onChange={(event:void) => searchHandler(event)} />
      <Radio label="Hour" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <Radio label="Day" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <Radio label="Week" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <Radio label="Month" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <Radio label="Year" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <Radio label="All" radioGroup="time" onChange={(event:void) => timeHandler(event)} />
      <InputNumber
        limit={100}
        placeholder="Set post limit (1-100)"
        onChange={() => limitHandler}
      />
      <Button label="Search" onClick={submitHandler}></Button>
    </Nav>
  );
};

export default Navbar;
