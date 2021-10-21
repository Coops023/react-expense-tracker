import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterhandler = (filtered) => {
    setFilteredYear(filtered);
  };

  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={filterhandler} />
      <ExpensesList items={filteredExpenses} />

      {/* 2 different ways to set condition statement in JSX code */}

      {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}

      {filteredExpenses.length > 0 &&
        filteredExpenses.map((element) => {
          return <ExpenseItem key={element.id} expenses={element} />;
        })} */}

      {/* {filteredExpenses.length === 0 ? (
        <p>No expenses found!</p>
      ) : (
        filteredExpenses.map((element) => {
          return <ExpenseItem key={element.id} expenses={element} />;
        })
      )} */}
    </Card>
  );
}
