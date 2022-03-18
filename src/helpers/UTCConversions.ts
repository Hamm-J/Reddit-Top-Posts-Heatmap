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

  const zeroPad = (num: number, places: number) =>
    String(num).padStart(places, "0");

  // get 12 hour format hour
  let hour12Format = ((hour + 11) % 12) + 1;

  // add leading 0 to minutes sub 2 digits
  let paddedMin = zeroPad(min, 2);

  // get am or pm based on hour
  let period = hour >= 12 ? "pm" : "am";

  let time = `${hour12Format}:${paddedMin}${period}`;

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
