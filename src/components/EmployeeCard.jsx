import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
import tempMockData from "../utils/tempMockData";
const EmployeeCard = ({ data }) => {
  return (
    <div className="border border-black md:w-[30vw] w-[90vw] m-[auto] flex flex-col items-center justify-center rounded-3xl shadow-md bg-slate-600">
      <img
        src={data.avatar}
        className="w-1/3 border border-black p-2 rounded-lg bg-gray-100"
      ></img>
      <div className="text-gray-100 items-center flex flex-col justify-center">
        <h1 className="">ID: {data.id}</h1>
        <h1>Name: {data.first_name + " " + data.last_name}</h1>
        <h1>Email: {data.email}</h1>
        <h1>Gender: {data.gender}</h1>
        <h1>Domain: {data.domain}</h1>
        <h1>Available: {data.available ? <>Yes</> : <>No</>}</h1>
      </div>
    </div>
  );
};
export default EmployeeCard;
