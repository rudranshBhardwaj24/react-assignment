import React from "react";
import ReactDOM from "react-dom/client";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeCardContainer from "./components/EmployeeCardContainer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EmployeeCardContainer />
  </React.StrictMode>
);
