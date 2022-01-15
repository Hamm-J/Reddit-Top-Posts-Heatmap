import styled from "styled-components";

export const InspectorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
`;

export const InspectorGrid = styled.div`
  background-color: seafoam;
  display: grid;
  grid-template-columns: 500px 200px 100px 200px 200px;
  grid-auto-flow: dense;
  border-top: 1px solid black;
  border-left: 1px solid black;
`;

export const ColumnTitle = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  font-weight: bold;
  padding: 5px;
`;

export const RowValue = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  padding: 5px;
`;
