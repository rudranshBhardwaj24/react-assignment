// import { useEffect, useState } from "react";
// import mockData from "../utils/mockData";
// import tempMockData from "../utils/tempMockData";
// import EmployeeCard from "./EmployeeCard";

// const EmployeeCardContainer = () => {
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const newData = tempMockData.filter((emp) =>
//       emp.first_name.toLowerCase().includes(search.toLowerCase())
//     );
//     setData(newData);
//     console.log(data);
//     console.log(search);
//   }, [search]);

//   return (
//     <div>
//       <div className="flex flex-row items-center justify-center">
//         <input
//           className="p-2 m-2 border border-black w-1/4 rounded-md"
//           type="text"
//           value={search}
//           placeholder="search"
//           onChange={(e) => {
//             setSearch(e.target.value);
//           }}
//         ></input>
//         <button className="p-2 m-2 border border-black rounded-md">
//           Search
//         </button>
//       </div>
//       <div className="flex md:flex-row flex-wrap items-center justify-center flex-col">
//         {data.map((items) => {
//           return <EmployeeCard data={items} key={items.id} />;
//         })}
//       </div>
//     </div>
//   );
// };
// export default EmployeeCardContainer;

import { useEffect, useState } from "react";
import mockData from "../utils/mockData";
import tempMockData from "../utils/tempMockData";
import EmployeeCard from "./EmployeeCard";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../utils/teamSlice";

const EmployeeCardContainer = () => {
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [domain, setDomain] = useState("All");
  const [available, setAvailable] = useState("All");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const team = useSelector((store) => store.team.members);

  const handleAddMember = (items) => {
    dispatch(addMember(items));
  };

  useEffect(() => {
    const newData = tempMockData.filter((emp) => {
      const isMatchingSearch =
        emp.first_name.toLowerCase().includes(search.toLowerCase()) ||
        emp.last_name.toLowerCase().includes(search.toLowerCase()) ||
        emp.domain.toLowerCase().includes(search.toLowerCase());

      const isMatchingGender = gender === "All" || emp.gender === gender;
      const isMatchingDomain = domain === "All" || emp.domain === domain;
      const isMatchingAvailable =
        available === "All" ||
        (available === "Yes" && emp.available) ||
        (available === "No" && !emp.available);

      return (
        isMatchingSearch &&
        isMatchingGender &&
        isMatchingDomain &&
        isMatchingAvailable
      );
    });
    setData(newData);
  }, [search, gender, domain, available]);

  const domains = [...new Set(tempMockData.map((emp) => emp.domain))];
  const availableOptions = ["All", "Yes", "No"];

  return (
    <div>
      <div className="flex flex-row items-center justify-center">
        <ul>
          <li className="font-bold"> Team - {team.length} </li>
        </ul>
        <input
          className="p-2 m-2 border border-black w-1/4 rounded-md"
          type="text"
          value={search}
          placeholder="search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <select
          className="p-2 m-2 border border-black rounded-md"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="All">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <select
          className="p-2 m-2 border border-black rounded-md"
          value={domain}
          onChange={(e) => {
            setDomain(e.target.value);
          }}
        >
          <option value="All">All Domains</option>
          {domains.map((domain) => (
            <option key={domain} value={domain}>
              {domain}
            </option>
          ))}
        </select>
        <select
          className="p-2 m-2 border border-black rounded-md"
          value={available}
          onChange={(e) => {
            setAvailable(e.target.value);
          }}
        >
          {availableOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <button className="p-2 m-2 border border-black rounded-md">
          Search
        </button>

        <button
          onClick={() => {
            handleAddMember();
          }}
        >
          Add Member
        </button>
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center flex-col">
        {data.map((items) => {
          return (
            <div>
              <EmployeeCard data={items} key={items.id} />
              <button
                onClick={() => {
                  handleAddMember(items);
                }}
              >
                Add to team
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default EmployeeCardContainer;
