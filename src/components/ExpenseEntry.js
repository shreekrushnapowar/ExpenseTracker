import React from "react";
import { inr, dmyDate } from "../utils/index";
const ExpenseEntry = ({
  expense,
  deleteEntry,
  setSelectedExpenseData,
  selectedExpenseData,
}) => {
  return (
    <>
      {/* <span className="badge bg-info mb-2"> */}
      <li
        className={
          "list-group-item mb-4 et-expense-entry " +
          (selectedExpenseData && selectedExpenseData.id == expense.id
            ? "list-group-item-danger"
            : "")
        }
      >
        <div className="row">
          <p className="col lead">{inr(expense.amount)}</p>
          <p className="col text-end">{expense.mode}</p>
        </div>
        <div className="row">
          <p className="col ">{expense.description}</p>
          <p className="col text-end">{dmyDate(expense.date)}</p>
        </div>
        <div className="et-button-set text-end">
          <button
            className="btn btn-link bi bi-pen-fill text-success"
            onClick={() => setSelectedExpenseData(expense)}
          ></button>
          <button
            className="btn btn-link bi bi-trash-fill text-danger"
            onClick={() => deleteEntry(expense.id)}
          ></button>
        </div>
      </li>
      {/* </span> */}
    </>
  );
};

export default ExpenseEntry;
