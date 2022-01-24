import React, { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import {
  InspectorContainer,
  InspectorGrid,
  ColumnTitle,
  RowValue,
} from "./Inspector.styled";
import { unixToCalendarDateTime } from "../../helpers/UTCConversions";

const Inspector = () => {
  const { selectedCell } = useContext<any>(FetcherContext);
  console.log(selectedCell);
  return (
    <InspectorContainer>
      <InspectorGrid>
        {selectedCell.length == 0 ? (
          <></>
        ) : (
          <>
            <ColumnTitle>Title</ColumnTitle>
            <ColumnTitle>Time Posted</ColumnTitle>
            <ColumnTitle>Upvotes</ColumnTitle>
            <ColumnTitle>Number of Comments</ColumnTitle>
            <ColumnTitle>Author</ColumnTitle>
          </>
        )}
        {selectedCell.map((post: any, postIdx: any) => (
          <React.Fragment key={postIdx}>
            <RowValue>
              <a
                href={`https://www.reddit.com${post.permalink}`}
                target="_blank"
              >
                {post.title}
              </a>
            </RowValue>
            <RowValue>{unixToCalendarDateTime(post.date)}</RowValue>
            <RowValue>{post.ups}</RowValue>
            <RowValue>{post.numComments}</RowValue>
            <RowValue>{post.author}</RowValue>
          </React.Fragment>
        ))}
      </InspectorGrid>
    </InspectorContainer>
  );
};

export default Inspector;
