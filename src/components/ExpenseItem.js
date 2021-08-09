import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

const ExpenseItem = (props) => {
  const [name, setName] = useState(props.name);

  const onClickHandler = () => {
    setName("Clicked");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{name}</h2>
        <div className="expense-item__price">{props.expense}</div>
      </div>
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  );
};

export default ExpenseItem;
