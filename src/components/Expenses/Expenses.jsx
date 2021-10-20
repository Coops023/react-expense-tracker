import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterhandler = (filtered) => {
    setFilteredYear(filtered);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterhandler} />
      <ExpenseItem expenses={props.expenses[0]} />
      <ExpenseItem expenses={props.expenses[1]} />
      <ExpenseItem expenses={props.expenses[2]} />
      <ExpenseItem expenses={props.expenses[3]} />
    </Card>
  );
}
