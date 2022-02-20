import React, { useState } from "react";
import { DeleteSubredditContainer } from "./DeleteSubreddit.styled";
import Button from "../common/Button/Button";

const DeleteSubreddit = () => {
  const [remove, setRemove] = useState(false); // use "remove" instead of "delete" because of strictmode conventions
  const deleteSubreddit = () => {};

  return (
    <DeleteSubredditContainer>
      <Button
        label="Delete Subreddit Data?"
        onClick={deleteSubreddit}
        remFontSize={1.2}
        backgroundColor="orange"
      ></Button>
    </DeleteSubredditContainer>
  );
};

export default DeleteSubreddit;
