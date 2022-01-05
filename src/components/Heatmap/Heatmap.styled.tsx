import styled from "styled-components";

export const HeatmapContainer = styled.div`
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
  grid-template-rows:  40px repeat(7, 50px);
  grid-auto-flow: dense;
`;


export const Cell = styled.button`
  background-color: #ebebeb;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
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

export const Spacer = styled.span`
`;


export const Description = styled.div``;
