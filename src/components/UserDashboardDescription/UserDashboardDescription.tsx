import React from "react";
import { UserDashboardDescriptionContainer } from "./UserDashboardDescription.styled";
import { SectionTitle, Para } from "../common/Markup/Markup.styled";

const UserDashboardDescription = () => {
  return (
    <UserDashboardDescriptionContainer>
      <SectionTitle>Subreddit Snapshots</SectionTitle>
      <Para>
        Click on any of your following subreddit snapshots to revisualize your
        saved top subreddit post data
      </Para>
    </UserDashboardDescriptionContainer>
  );
};

export default UserDashboardDescription;
