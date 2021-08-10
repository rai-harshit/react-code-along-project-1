import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_DATA = [
  {
    id: "e1",
    name: "Car Insurance",
    date: new Date(2019, 2, 1),
    expense: 300.25,
  },
  {
    id: "e2",
    name: "Toilet Paper",
    date: new Date(2019, 4, 1),
    expense: 314.5,
  },
  {
    id: "e3",
    name: "Oats",
    date: new Date(2019, 5, 1),
    expense: 200.25,
  },
  {
    id: "e4",
    name: "Amul Lassi",
    date: new Date(2019, 11, 1),
    expense: 30.25,
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const newExpenseHandler = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onNewExpenseAdd={newExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
