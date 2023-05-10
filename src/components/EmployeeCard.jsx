import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
const EmployeeCard = ({ data }) => {
  //   console.log(mockData[0]);
  //   const data = mockData[0];
  return (
    <div className="border border-black w-1/5 flex flex-col items-center justify-center m-5 p-5 rounded-md shadow-md">
      <img
        src={data.avatar}
        className="w-1/3 border border-black p-2 rounded-lg"
      ></img>
      <h1 className="">ID: {data.id}</h1>
      <h1>Name: {data.first_name + " " + data.last_name}</h1>
      <h1>Email: {data.email}</h1>
      <h1>Gender: {data.gender}</h1>
      <h1>Domain: {data.domain}</h1>
      <h1>Available: {data.available ? <>Yes</> : <>No</>}</h1>
    </div>
  );
};
export default EmployeeCard;
