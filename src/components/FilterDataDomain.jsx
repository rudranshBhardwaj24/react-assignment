import React from "react";
function FilterDataDomain() {
  const [selectedDomain, setSelectedDomain] = useState("");

  const handleDomainChange = (e) => {
    setSelectedDomain(e.target.value);
  };

  const filteredData = tempMockData.filter(
    (employee) => employee.domain === selectedDomain
  );

  const domainOptions = [
    "Sales",
    "Finance",
    "Marketing",
    "IT",
    "Management",
    "UI Designing",
  ];

  return (
    <div>
      <label htmlFor="domain-select">Select a domain:</label>
      <select
        id="domain-select"
        value={selectedDomain}
        onChange={handleDomainChange}
      >
        <option value="">All</option>
        {domainOptions.map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>

      <ul>
        {filteredData.map((employee) => (
          <li key={employee.id}>
            {employee.first_name} {employee.last_name} ({employee.domain})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FilterDataDomain;
