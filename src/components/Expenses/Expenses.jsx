import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expenses={props.expenses[0]} />
      <ExpenseItem expenses={props.expenses[1]} />
      <ExpenseItem expenses={props.expenses[2]} />
      <ExpenseItem expenses={props.expenses[3]} />
    </Card>
  );
}
