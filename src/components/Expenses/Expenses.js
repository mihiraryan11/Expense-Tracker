import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  // const expense = props.expenses;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

// what i did
// <div className="expenses">
//   <ExpenseItems
//     title={expense[0].title}
//     amount={expense[0].amount}
//     date={expense[0].date}
//   />
//   <ExpenseItems
//     title={expense[1].title}
//     amount={expense[1].amount}
//     date={expense[1].date}
//   />
//   <ExpenseItems
//     title={expense[2].title}
//     amount={expense[2].amount}
//     date={expense[2].date}
//   />
//   <ExpenseItems
//     title={expense[3].title}
//     amount={expense[3].amount}
//     date={expense[3].date}
//   />
// </div>

/* {Three ways of adding the para element} */

/* {filteredExpenses.length === 0 && <p>No expenses found.</p>} */

/* {filteredExpenses.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))} */

/* {filteredExpenses.length === 0 ? (
      <p>No expenses found.</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    )} */
