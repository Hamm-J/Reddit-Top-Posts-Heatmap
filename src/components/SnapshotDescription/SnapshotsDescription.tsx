import React from "react";
import { SnapshotsDescriptionContainer } from "./SnapshotsDescription.styled";
import { Para } from "../common/Markup/Markup.styled";

const SnapshotsDescription = () => {
  return (
    <SnapshotsDescriptionContainer>
      <Para>
        Click on any of your following subreddit snapshots to revisualize your
        saved top subreddit post data
      </Para>
    </SnapshotsDescriptionContainer>
  );
};

export default SnapshotsDescription;
