import React, { useState, useEffect, useRef } from "react";
const initialState = {
  amount: 0,
  category: "",
  mode: "Cash",
  description: "",
  date: new Date().toISOString().split("T")[0],
};
const ExpenseForm = ({
  addExpenseEntry,
  selectedExpenseData,
  setSelectedExpenseData,
  updateExpenseEntry,
}) => {
  const [expenseEntry, setExpenseEntry] = useState(initialState);
  const [errors, setErrors] = useState({});
  const amountRef = useRef();

  useEffect(() => {
    if (selectedExpenseData) {
      setExpenseEntry({ ...selectedExpenseData });
    }
    console.log("expense data", selectedExpenseData);
  }, [selectedExpenseData]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    if (selectedExpenseData) {
      updateExpenseEntry({ ...expenseEntry });
      setSelectedExpenseData(undefined);
    } else {
      addExpenseEntry({ ...expenseEntry });
    }
    setExpenseEntry(initialState);
    setErrors({});
  };
  const changeHandler = ({ target: { name, value } }) => {
    setExpenseEntry({ ...expenseEntry, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!expenseEntry.amount) {
      errors.amount = "Amount is must..";
    }
    if (expenseEntry.amount <= 0) {
      errors.amount = "Amount must be > 0..";
    }
    if (!expenseEntry.description) {
      errors.description = "Description is must..";
    } else if (expenseEntry.description.length < 5) {
      errors.description = "At least 5 letters are must..";
    }

    return errors;
  };
  return (
    <>
      <div
        className="card text-white bg-secondary mb-3"
        // style="max-width: 20rem;"
      >
        <div className="card-header">
          {!selectedExpenseData ? (
            <h3>Add a new expense entry.</h3>
          ) : (
            <h3>Update expense entry.</h3>
          )}
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="radio"
                name="mode"
                id="cashModeInput"
                className="form-label"
                onChange={changeHandler}
                value="Cash"
                checked={expenseEntry.mode === "Cash"}
              />
              <label htmlFor="cashModeInput" className="form-label ms-3 me-3">
                Cash
              </label>

              <input
                type="radio"
                name="mode"
                id="onlineModeInput"
                className="form-label"
                value="Online"
                onChange={changeHandler}
                checked={expenseEntry.mode === "Online"}
              />
              <label htmlFor="onlineModeInput" className="form-label ms-3 me-3">
                Online
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="amountInput" className="form-label">
                Amount:
              </label>
              <input
                type="number"
                name="amount"
                id="amountInput"
                className="form-control"
                onChange={changeHandler}
                value={expenseEntry.amount}
                ref={amountRef}
              />
              <p className="text-danger">{errors.amount}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="categoryInput" className="form-label">
                Category:
              </label>
              <input
                type="text"
                name="category"
                id="categoryInput"
                className="form-control"
                onChange={changeHandler}
                value={expenseEntry.category}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="descriptionInput" className="form-label">
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="descriptionInput"
                className="form-control"
                onChange={changeHandler}
                value={expenseEntry.description}
              />
              <p className="text-danger">{errors.description}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="dateInput" className="form-label">
                Date:
              </label>
              <input
                type="date"
                name="date"
                id="dateInput"
                className="form-control"
                onChange={changeHandler}
                value={expenseEntry.date}
              />
            </div>

            {!selectedExpenseData ? (
              <button className="btn btn-primary">Save Changes</button>
            ) : (
              <button className="btn btn-primary">Update Changes</button>
            )}

            {selectedExpenseData && (
              <button
                className="btn btn-link"
                onClick={() => {
                  setSelectedExpenseData(undefined);
                  setExpenseEntry(initialState);
                  amountRef.current.focus();
                }}
              >
                Cancel
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default ExpenseForm;
