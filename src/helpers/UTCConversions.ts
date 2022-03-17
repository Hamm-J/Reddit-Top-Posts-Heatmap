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

export const unixToCalendarDate = (unix: number) => {
  let a = new Date(unix * 1000);
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let time = `${month} ${date}, ${year}`;

  return time;
};

export const unixToTime = (unix: number) => {
  let a = new Date(unix * 1000);
  let hour = a.getHours();
  let min = a.getMinutes();
  let time = `${hour}:${min}`;

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
