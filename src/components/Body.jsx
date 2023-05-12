import { Outlet } from "react-router-dom";
import Header from "./Header";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Outlet />
    </div>
  );
};
export default Body;
