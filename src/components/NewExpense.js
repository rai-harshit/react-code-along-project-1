import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onNewExpenseHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpenseAdd(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onNewItem={onNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
