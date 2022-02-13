import React from "react";
import {
  InspectorContainer,
  InspectorTitleWrapper,
  InspectorGrid,
  ColumnTitle,
  RowValue,
} from "./Inspector.styled";
import { unixToCalendarDateTime } from "../../helpers/UTCConversions";
import { Anchor, SectionTitle } from "../common/Markup/Markup.styled";

interface IInspector {
  selectedCell: any[];
}

const Inspector = ({ selectedCell }: IInspector) => {
  return (
    <InspectorContainer>
      <InspectorTitleWrapper>
        {selectedCell.length > 0 && <SectionTitle>Posts</SectionTitle>}
      </InspectorTitleWrapper>
      <InspectorGrid>
        {selectedCell.length > 0 && (
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
              <Anchor
                href={`https://www.reddit.com${post.permalink}`}
                target="_blank"
              >
                {post.title}
              </Anchor>
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
