import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ExpensesApp from "./components/ExpensesApp";
import CounterApp from "./components/CounterApp";
import SlideShow from "./components/SlideShow";
import UncontrolledInputsDemo from "./components/UncontrolledInputsDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ExpensesApp />
    {/* <CounterApp /> */}
    {/* <SlideShow /> */}
    {/* <UncontrolledInputsDemo /> */}
  </>
);
