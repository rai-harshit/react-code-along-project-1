import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpenseItem
        name={props.expenseData[0].name}
        date={props.expenseData[0].date}
        expense={props.expenseData[0].expense}
      />
      <ExpenseItem
        name={props.expenseData[1].name}
        date={props.expenseData[1].date}
        expense={props.expenseData[1].expense}
      />
      <ExpenseItem
        name={props.expenseData[2].name}
        date={props.expenseData[2].date}
        expense={props.expenseData[2].expense}
      />
      <ExpenseItem
        name={props.expenseData[3].name}
        date={props.expenseData[3].date}
        expense={props.expenseData[3].expense}
      />
    </div>
  );
};

export default Expenses;
