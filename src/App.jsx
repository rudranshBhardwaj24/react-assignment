import React from "react";
import EmployeeCardContainer from "./components/EmployeeCardContainer";
import store from "./utils/store";
import { Provider } from "react-redux";
import Team from "./components/Team";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Team />
            <EmployeeCardContainer />
          </div>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
