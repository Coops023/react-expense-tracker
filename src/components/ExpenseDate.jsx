import React from "react";
import "./ExpenseDate.css";

export default function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-GB", { month: "short" });
  const year = props.date.toLocaleString("en-GB", { year: "numeric" });
  const day = props.date.toLocaleString("en-GB", { day: "numeric" });

  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
