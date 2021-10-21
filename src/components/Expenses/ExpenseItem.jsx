import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{props.expenses.title}</h2>
          <div className="expense-item__price">${props.expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
}
