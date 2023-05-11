import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
import tempMockData from "../utils/tempMockData";
import EmployeeCard from "./EmployeeCard";

const EmployeeCardContainer = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const newData = tempMockData.filter((emp) =>
      emp.first_name.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
    console.log(data);
    console.log(search);
  }, [search]);

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <input
          className="p-2 m-2 border border-black w-1/4 rounded-md"
          type="text"
          value={search}
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button className="p-2 m-2 border border-black rounded-md">
          Search
        </button>
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center flex-col">
        {data.map((items) => {
          return <EmployeeCard data={items} key={items.id} />;
        })}
      </div>
    </div>
  );
};
export default EmployeeCardContainer;
