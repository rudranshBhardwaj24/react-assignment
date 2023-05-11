import React from "react";
import ReactDOM from "react-dom/client";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeCardContainer from "./components/EmployeeCardContainer";
import FilterDataDomain from "./components/FilterDataDomain";
import store from "./utils/store";
import { Provider } from "react-redux";
import Team from "./components/Team";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Team />
      <EmployeeCardContainer />
    </Provider>
  </React.StrictMode>
);
