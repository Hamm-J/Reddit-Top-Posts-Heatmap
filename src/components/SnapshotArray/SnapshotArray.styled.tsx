import styled from "styled-components";

export const SnapshotArrayContainer = styled.div`
  width: 1290px;
`;

interface IArray {
  arrayLength: number;
}
export const Array = styled.div<IArray>`
  display: grid;
  gap: 5px;

  grid-template-columns: ${(props) =>
    props.arrayLength > 4
      ? "repeat(auto-fit, minmax(250px, 1fr))"
      : "repeat(auto-fit, 250px)"};
`;

export const LoadingSymbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptySnapshots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  font-size: 20px;
  font-style: italic;
  font-family: "Trebuchet MS";
`;
