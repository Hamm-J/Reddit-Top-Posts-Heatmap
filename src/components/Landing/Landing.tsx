import React from "react";
import { LandingContainer, ParaWrapper } from "./Landing.styled";
import {
  SectionTitle,
  Para,
  List,
  ListItem,
  Anchor,
} from "../common/Markup/Markup.styled";

const Landing = () => {
  return (
    <LandingContainer>
      <SectionTitle>How it works</SectionTitle>
      <List>
        <ListItem>Search a subreddit.</ListItem>
        <ListItem>We find the top 100 posts from the last year.</ListItem>
        <ListItem>
          We visualize the data in a heatmap that is grouped by weekday and hour
          of the day.
        </ListItem>
        <ListItem>
          Click on a heatmap cell to inspect the posts from that day and time.
        </ListItem>
        <ListItem>
          Instantly find out when to post on{" "}
          <Anchor href="https://www.reddit.com/" target="_blank">
            Reddit
          </Anchor>
        </ListItem>
        <ListItem>
          If you have an account, you can then save the subreddit post data to
          revisualize at a later time.
        </ListItem>
        <ListItem>
          The date and time is{" "}
          <Anchor
            href="https://en.wikipedia.org/wiki/Unix_time"
            target="_blank"
          >
            {" "}
            Unix Time
          </Anchor>{" "}
          based.
        </ListItem>
      </List>
    </LandingContainer>
  );
};

export default Landing;
