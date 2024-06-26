import React from "react";
import ExpenseEntry from "./ExpenseEntry";

const ExpenseList = ({
  expenseData,
  deleteEntry,
  setSelectedExpenseData,
  selectedExpenseData,
}) => {
  const dataJsx = expenseData.map((expense) => (
    <ExpenseEntry
      key={expense.id}
      expense={expense}
      deleteEntry={deleteEntry}
      setSelectedExpenseData={setSelectedExpenseData}
      selectedExpenseData={selectedExpenseData}
    />
  ));
  return (
    <>
      {!expenseData.length && (
        <>
          <h1 className="text-info">You don't have any expense entry</h1>
          <p className="lead">Please use expense form to add a new entry</p>
        </>
      )}
      <ul className="list-group">{dataJsx}</ul>
    </>
  );
};

export default ExpenseList;
