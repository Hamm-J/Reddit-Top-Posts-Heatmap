import styled from "styled-components";

export const InspectorContainer = styled.div``;

export const InspectorTitleWrapper = styled.div`
  width: 1290px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InspectorGrid = styled.div`
  background-color: seafoam;
  display: grid;
  grid-template-columns: 590px 200px 100px 100px 100px 200px;
  grid-auto-flow: dense;
  border-top: 2px solid black;
  border-left: 2px solid black;
`;

export const ColumnTitle = styled.div`
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.5rem 0 0.5rem 0.5rem;
  font-family: "Trebuchet MS";
`;

export const RowValue = styled.div`
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 15px;
  font-family: Verdana;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
`;
