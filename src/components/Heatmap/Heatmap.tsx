import {
  HeatmapContainer,
  HeatmapGrid,
  Cell,
  TimeValue,
  DayValue,
  Spacer,
} from "./Heatmap.styled";

// TODO: 2022_01_30
// Cast and type the posts and postCounts objects and then pass those interfaces
// here.
interface IHeatmap {
  posts: {};
  postCounts: {};
  handleSelectedCell: (selectedCell: []) => void;
}

const Heatmap = ({ posts, postCounts, handleSelectedCell }: IHeatmap) => {
  // Create each day's row with 24 elements (1 for each hour) and set the
  // elements' value to the keys of what the fetcherTransform returns
  let sundayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Sunday_${ele}`
  );
  let mondayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Monday_${ele}`
  );
  let tuesdayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Tuesday_${ele}`
  );
  let wednesdayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Wednesday_${ele}`
  );
  let thursdayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Thursday_${ele}`
  );
  let fridayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Friday_${ele}`
  );
  let saturdayRow = Array.from({ length: 24 }, (ele, val) => val).map(
    (ele) => `Saturday_${ele}`
  );

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

        {sundayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {mondayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {tuesdayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {wednesdayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {thursdayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {fridayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}

        {saturdayRow.map((postTime: string, postTimeIdx: number) => (
          <Cell
            key={postTimeIdx}
            id={postTime}
            cellCount={postTime in posts ? postCounts[postTime as keyof {}] : 0}
            onClick={() =>
              postTime in posts &&
              handleSelectedCell(posts[postTime as keyof {}])
            }
            tabIndex={postTime in posts ? 0 : -1}
          >
            {postTime in posts ? postCounts[postTime as keyof {}] : 0}
          </Cell>
        ))}
      </HeatmapGrid>
    </HeatmapContainer>
  );
};

export default Heatmap;
