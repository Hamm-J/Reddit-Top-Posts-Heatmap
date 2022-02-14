import React from "react";
import { UserDashboardDescriptionContainer } from "./UserDashboardDescription.styled";
import { SectionTitle, Para } from "../common/Markup/Markup.styled";

const UserDashboardDescription = () => {
  return (
    <UserDashboardDescriptionContainer>
      <SectionTitle>Description</SectionTitle>
      <Para>
        Click on any of your following subreddit snapshots to revisualize the
        post data.
      </Para>
    </UserDashboardDescriptionContainer>
  );
};

export default UserDashboardDescription;
