import styled from "styled-components";

export const HeatmapContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeatmapGrid = styled.div`
  display: grid;
  grid-template-columns: 90px repeat(24, 50px);
  grid-template-rows: 40px repeat(7, 50px);
  grid-auto-flow: dense;
`;

export const Cell = styled.button<{ cellCount: number }>`
  background-color: ${(props) => {
    switch (true) {
      case props.cellCount === 1:
        return "#fff33b";
      case props.cellCount === 2:
        return "#fdc70c";
      case props.cellCount === 3:
        return "#f3903f";
      case props.cellCount === 4:
        return "#ed683c";
      case props.cellCount >= 5:
        return "#e93e3a";
      case props.cellCount === 0:
        return "lightgray";
      default:
        return "lightgray";
    }
  }};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.cellCount > 0 ? "pointer" : "default")};
  outline: none;

  &:hover,
  &:focus,
  &:active {
    border: 2px solid ${(props) => (props.cellCount > 0 ? "blue" : "lightgray")};
  }
`;

export const TimeValue = styled.label`
  grid-column-end: span 2;
  align-self: center;
  justify-self: center;
  font-weight: bold;
  padding-bottom: 8px;
`;

export const DayValue = styled.label`
  grid-column: 1;
  align-self: center;
  justify-self: center;
  font-weight: bold;
  padding-right: 16px;
`;

export const Spacer = styled.span``;
