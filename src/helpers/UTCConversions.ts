import { addAbortSignal } from "stream";

export const unixToWeekDay = (unix: number) => {
  let a = new Date(unix * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = days[a.getDay()];
  return dayOfWeek;
};

export const unixToCalendarDate = (unix: number) => {
  let a = new Date(unix * 1000);
  let year = a.getFullYear();
  let month = a.getMonth();
  let date = a.getDate();
  let time = `${year}_${month}_${date}`;
  return time;
};

export const unixToDayHour = (unix: number) => {
  let a = new Date(unix * 1000);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayOfWeek = days[a.getDay()];
  let hour = a.getHours();
  let time = `${dayOfWeek}_${hour}`;
  return time;
};

export const unixToCalendarDateTime = (unix: number) => {
  let a = new Date(unix * 1000);
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  let time = `${date}_${month}_${year}_${hour}:${min}:${sec}`;
  return time;
};

export const newDateToUTC = (date: Date) => {
  let timeUTC = Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
  );
  return timeUTC;
};
