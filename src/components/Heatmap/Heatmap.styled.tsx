import styled from "styled-components";

export const HeatmapContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeatmapGrid = styled.div`
  background-color: coral;
  display: grid;
  grid-template-columns: 90px repeat(24, 50px);
  grid-template-rows: 40px repeat(7, 50px);
  grid-auto-flow: dense;
`;

export const Cell = styled.button<{ cellCount: number }>`
  background-color: ${(props) => {
    switch (true) {
      case props.cellCount === 1:
        return "lightorange";
      case props.cellCount === 2:
        return "lightyellow";
      case props.cellCount === 3:
        return "lightgreen";
      case props.cellCount > 3:
        return "lightblue";
      case props.cellCount === 0:
        return "lightgray";
      default:
        return "lightgray";
    }
  }};
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.cellCount > 0 ? "pointer" : "default")};

  &:hover {
    /* background-color: coral; */
    background-color: ${(props) =>
      props.cellCount > 0 ? "lightgreen" : "lightgray"};
  }
`;

export const TimeValue = styled.label`
  grid-column-end: span 2;
  align-self: center;
  justify-self: center;
`;

export const DayValue = styled.label`
  grid-column: 1;
  align-self: center;
  justify-self: center;
`;

export const Spacer = styled.span``;

export const Description = styled.div``;

export const BottomWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
