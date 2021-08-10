import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const selectedYearHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectedYear={selectedYearHandler}
      />

      {props.expenseData
        .filter((item) => {
          return item.date.getFullYear().toString() === selectedYear;
        })
        .map((item) => (
          <ExpenseItem
            key={item.id}
            name={item.name}
            date={item.date}
            expense={item.expense}
          />
        ))}
    </div>
  );
};

export default Expenses;
