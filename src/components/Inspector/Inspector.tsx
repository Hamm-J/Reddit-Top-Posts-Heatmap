import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { InspectorContainer } from "./Inspector.styled";
import { unixToDayHour } from "../../helpers/UTCConversions";

const Inspector = () => {
  const { selectedCell } = useContext<any>(FetcherContext);
  return (
    <InspectorContainer>
      <p>Inspector</p>
      {selectedCell.map((post: any, postIdx: any) => (
        <div key={postIdx}>
          <div>{post.permalink}</div>
          <div>
            <b>{unixToDayHour(post.date)}</b>
          </div>
        </div>
      ))}
    </InspectorContainer>
  );
};

export default Inspector;
