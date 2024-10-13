import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  let weekday = weekdays[props.date.getDay()];

  let date = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getFullYear();

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {weekday}, {date}/{month}/{year} {hours}:{minutes}
    </div>
  );
}
