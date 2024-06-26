import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import appData from "../app.json";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import initialData from "../expense.json";
import UserInputForm from "./UserInputForm";
function App() {
  const [expenseData, setExpenseData] = useState(() => {
    const expenseData = localStorage.getItem("expenseData");
    return expenseData ? JSON.parse(expenseData) : initialData;
  });
  const [selectedExpenseData, setSelectedExpenseData] = useState(undefined);

  useEffect(() => {
    localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);

  const deleteEntry = (id) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    setExpenseData(expenseData.filter((e) => e.id != id));
  };
  const addExpenseEntry = (expenseEntry) => {
    const id =
      expenseData.length > 0
        ? 1 + Math.max(...expenseData.map((e) => e.id))
        : 1;
    const localExpenseData = [...expenseData, { ...expenseEntry, id }];
    console.log(localExpenseData);

    setExpenseData(localExpenseData);
  };
  const updateExpenseEntry = (expenseEntry) => {
    const localExpenseEntry = [...expenseData];
    const index = localExpenseEntry.findIndex((e) => e.id == expenseEntry.id);

    if (index !== -1) {
      localExpenseEntry[index] = expenseEntry;
      setExpenseData(localExpenseEntry);
    }
  };
  return (
    <>
      <Header name={appData.appTitle} version={appData.appVersion} />
      <div className="et-main container">
        {/* .row>.col-6*2 */}
        <div className="row">
          <div className="col-6">
            <ExpenseList
              expenseData={expenseData}
              deleteEntry={deleteEntry}
              setSelectedExpenseData={setSelectedExpenseData}
              selectedExpenseData={selectedExpenseData}
            />{" "}
          </div>
          <div className="col-6">
            <ExpenseForm
              addExpenseEntry={addExpenseEntry}
              selectedExpenseData={selectedExpenseData}
              setSelectedExpenseData={setSelectedExpenseData}
              updateExpenseEntry={updateExpenseEntry}
            />
            {/* <UserInputForm /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
