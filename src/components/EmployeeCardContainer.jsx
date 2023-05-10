import mockData from "../utils/mockData";
import EmployeeCard from "./EmployeeCard";
const EmployeeCardContainer = () => {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      {mockData.map((items) => {
        return <EmployeeCard data={items} key={items.id} />;
      })}
    </div>
  );
};
export default EmployeeCardContainer;
