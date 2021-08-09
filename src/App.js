import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const data = [
    {
      id: "e1",
      name: "Car Insurance",
      date: new Date(2019, 2, 1),
      expense: 300.25,
    },
    {
      id: "e2",
      name: "Toilet Paper",
      date: new Date(2018, 4, 1),
      expense: 314.5,
    },
    {
      id: "e3",
      name: "Oats",
      date: new Date(2017, 5, 1),
      expense: 200.25,
    },
    {
      id: "e4",
      name: "Amul Lassi",
      date: new Date(2016, 11, 1),
      expense: 30.25,
    },
  ];

  return (
    <div className="App">
      <NewExpense />
      <Expenses expenseData={data} />
    </div>
  );
}

export default App;
