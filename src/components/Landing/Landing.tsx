import React from "react";
import { LandingContainer } from "./Landing.styled";
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
        <ListItem>
          We find the top 100 posts from that subreddit within the last year.
        </ListItem>
        <ListItem>
          The top 100 posts are presented in a heatmap grouped by weekday and
          hour of the day.
        </ListItem>
        <ListItem>
          Click on any occupied heatmap square to inspect the posts from that
          day and time.
        </ListItem>
        <ListItem>
          Instantly find out when to post on{" "}
          <Anchor href="https://www.reddit.com/" target="_blank">
            Reddit
          </Anchor>
          !
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
      <SectionTitle>Bonus</SectionTitle>
      <Para>
        If you create an account, you can save the subreddit post data to
        revisualize at any time in the future!
      </Para>
      <SectionTitle>Special Thanks</SectionTitle>
      <Para>
        A special thanks to Reddit for making its{" "}
        <Anchor href="https://www.reddit.com/dev/api/" target="_blank">
          API
        </Anchor>{" "}
        available to the public for free. This tool wouldn't have been possible
        without this generosity from Reddit. Thank you,{" "}
        <Anchor
          href="https://en.wikipedia.org/wiki/Snoo#:~:text=Snoo%2C%20the%20mascot%20of%20the,born%201962)%2C%20American%20discus%20thrower"
          target="_blank"
        >
          Snoo
        </Anchor>
        .
      </Para>
    </LandingContainer>
  );
};

export default Landing;
