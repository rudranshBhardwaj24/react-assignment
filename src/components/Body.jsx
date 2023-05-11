import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <div className="grid grid-flow-col">
      <Outlet />
    </div>
  );
};
export default Body;