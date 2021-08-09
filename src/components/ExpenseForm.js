import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredData, setEnteredData] = useState({
  //   title: "",
  //   date: "",
  //   amount: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setEnteredData((previousData) => ({
    //   ...previousData,
    //   title: event.target.value,
    // }));
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setEnteredData((previousData) => ({
    //   ...previousData,
    //   date: event.target.value,
    // }));
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setEnteredData((previousData) => ({
    //   ...previousData,
    //   amount: event.target.value,
    // }));
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const submittedData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    console.log(submittedData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
