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
        <ListItem>We find the time 50 posts from the last year.</ListItem>
        <ListItem>
          We visualize the data in a heatmap that is grouped by weekday and hour
          of the day.
        </ListItem>
        <ListItem>
          Instantly find out when to post on{" "}
          <Anchor href="https://www.reddit.com/" target="_blank">
            Reddit
          </Anchor>
        </ListItem>
      </List>
      <SectionTitle>About</SectionTitle>
      <ParaWrapper>
        <Para>
          This project was created with the goal of practicing and learning
          about the{" "}
          <Anchor
            href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
            target="_blank"
          >
            Fetch API
          </Anchor>
          ,{" "}
          <Anchor href="https://firebase.google.com/" target="_blank">
            Firebase
          </Anchor>
          ,{" "}
          <Anchor href="https://www.typescriptlang.org/" target="_blank">
            TypeScript
          </Anchor>
          , and{" "}
          <Anchor href="https://reactjs.org/" target="_blank">
            React
          </Anchor>
          . The code can be found on my GitHub.
        </Para>
      </ParaWrapper>
    </LandingContainer>
  );
};

export default Landing;
