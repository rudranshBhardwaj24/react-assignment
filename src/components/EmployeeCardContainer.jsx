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

  // Adding Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 20;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const filteredData = mockData.filter((emp) => {
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
  const records = filteredData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredData.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  useEffect(() => {
    setData(filteredData.slice(firstIndex, lastIndex));
  }, [search, gender, domain, available, firstIndex, lastIndex]);

  const domains = [...new Set(tempMockData.map((emp) => emp.domain))];
  const availableOptions = ["All", "Yes", "No"];
  return (
    <div>
      <div className="">
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
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center flex-col gap-2">
        {records.map((items) => {
          return (
            <div>
              <EmployeeCard data={items} key={items.id} />
            </div>
          );
        })}
      </div>

      {/*Added Pagination */}
      <div className="flex justify-center items-center flex-row gap-20">
        <a
          href="#"
          onClick={prePage}
          className="p-5 m-5 font-bold border border-black bg-blue-400"
        >
          Prev
        </a>
        {numbers.map((n, i) => {
          <li key={i}>
            <a href="#" onClick={() => changeCPage(n)}></a>
          </li>;
        })}
        <a
          href="#"
          onClick={nextPage}
          className="p-5 m-5 font-bold border border-black bg-blue-400"
        >
          Next
        </a>
      </div>
    </div>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage() {}
};
export default EmployeeCardContainer;
