import {
  HeatmapContainer,
  HeatmapGrid,
  Cell,
  TimeValue,
  DayValue,
  Spacer,
  Description,
} from "./Heatmap.styled";

const Heatmap = () => {
  let arr = Array.from({ length: 168 }, (x, i) => i);

  return (
    <HeatmapContainer>
      <HeatmapGrid>
        <Spacer></Spacer>
        <TimeValue>12:00am</TimeValue>
        <TimeValue>2:00am</TimeValue>
        <TimeValue>4:00am</TimeValue>
        <TimeValue>6:00am</TimeValue>
        <TimeValue>8:00am</TimeValue>
        <TimeValue>10:00am</TimeValue>
        <TimeValue>12:00pm</TimeValue>
        <TimeValue>2:00pm</TimeValue>
        <TimeValue>4:00pm</TimeValue>
        <TimeValue>6:00pm</TimeValue>
        <TimeValue>8:00pm</TimeValue>
        <TimeValue>10:00pm</TimeValue>
        <DayValue>Sunday</DayValue>
        <DayValue>Monday</DayValue>
        <DayValue>Tuesday</DayValue>
        <DayValue>Wednesday</DayValue>
        <DayValue>Thursday</DayValue>
        <DayValue>Friday</DayValue>
        <DayValue>Saturday</DayValue>

        {arr.map((val: any, valIdx: number) => (
          <Cell key={valIdx}>{val}</Cell>
        ))}
      </HeatmapGrid>
      <Description>All times are shown in [ADD TIMEZONE]</Description>
    </HeatmapContainer>
  );
};

export default Heatmap;
