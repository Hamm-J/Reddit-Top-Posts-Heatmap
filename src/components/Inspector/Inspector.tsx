import { useContext } from "react";
import { FetcherContext } from "../../contexts/FetcherContext";
import { InspectorContainer } from "./Inspector.styled";
import { unixToDayHour } from "../../helpers/UTCConversions";

const Inspector = () => {
  const { selectedCell, comments } = useContext<any>(FetcherContext);
  console.log("selectedcell");
  // console.log(selectedCell[0].id);
  // console.log(selectedCell);
  return (
    <InspectorContainer>
      <p>Inspector</p>
      {selectedCell.map((post: any, postIdx: any) => (
        <div key={postIdx}>
          <div>{post.permalink}</div>
          <div>
            <b>{unixToDayHour(post.date)}</b>
          </div>
          <div>
            <b>{post.id}</b>
          </div>
          <div>
            <p>comments stuff:</p>
            {comments[selectedCell[0].id].map((val: any, valIdx: any) => (
              <div key={valIdx}>
                <div>{val.id}</div>
                <div>{val.body}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </InspectorContainer>
  );
};

export default Inspector;
