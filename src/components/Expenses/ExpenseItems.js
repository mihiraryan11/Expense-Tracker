import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

import "./ExpenseItems.css";

const ExpenseItems = (props) => {
  // const expenseDate = new Date(2022,5,13); // object will break the code if directly output it
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 269.99;

  // let title = props.title; its wrong

  //some events are supported on particulare elements only

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />{" "}
        {/* same as <ExpenseDate date = {props.date}></ExpenseDate> */}
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};
export default ExpenseItems;
