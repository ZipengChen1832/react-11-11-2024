import React, { useEffect, useState, useMemo } from "react";
import fetchDevelopers from "./mockData";

export default function SortableTable() {
  const [developers, setDevelopers] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [isAscending, setIsAscending] = useState(true);
  // filter options
  const [minAge, setMinAge] = useState(0);

  useEffect(() => {
    fetchDevelopers().then((data) => setDevelopers(data));
  }, []);

  const filteredDevs = useMemo(() => {
    return developers.filter((developer) => {
      return developer.age >= minAge;
    });
  });

  const sortedDevs = useMemo(() => {
    return [...filteredDevs].sort((dev1, dev2) => {
      if (!sortBy) return 0;

      const flag = isAscending ? 1 : -1;
      const field1 = dev1[sortBy];
      const field2 = dev2[sortBy];

      if (typeof field1 === "number") {
        return flag * (field1 - field2);
      } else if (typeof field1 === "string") {
        return flag * field1.localeCompare(field2);
      }
    });
  }, [filteredDevs, sortBy, isAscending]);

  // useEffect(() => {
  //   // console.log("Sorting by", sortBy);
  //   const sortedDevs = [...developers].sort((dev1, dev2) => {
  //     const field1 = dev1[sortBy];
  //     const field2 = dev2[sortBy];

  //     // if something is null, we move it back
  //     if (!field2) return -1;
  //     if (!field1) return 1;

  //     if (typeof field1 === "number") {
  //       return field1 - field2;
  //     } else if (typeof field1 === "string") {
  //       return field1.localeCompare(field2);
  //     }
  //   });

  //   setDevelopers(sortedDevs);
  // }, [sortBy]);

  const columns = [
    { field: "fullName", display: "Full Name" },
    { field: "email", display: "Email" },
    { field: "gender", display: "Gender" },
    { field: "age", display: "Age" },
    { field: "startDate", display: "Start Date" },
  ];

  const handleSort = (key) => {
    setSortBy(key);

    // this logic just depends on the design
    setIsAscending(!isAscending);
  };
  const handleReset = () => {
    setMinAge(0);
    setSortBy(null);
  };

  return (
    <div>
      <h1>Sortable Table</h1>
      <form>
        <label>
          Filter By Age:
          <input
            value={minAge}
            onChange={(e) => {
              if (Number.isNaN(+e.target.value)) return;
              setMinAge(+e.target.value);
            }}
          />
        </label>
        {/* <button onClick={handleFilter}>Filter</button> */}
      </form>
      <button onClick={handleReset}>Reset</button>
      <table>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th key={column.field} onClick={() => handleSort(column.field)}>
                  {column.display}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedDevs.map((developer) => {
            const { fullName, email, gender, age, startDate } = developer;
            return (
              <tr key={email}>
                <td>{fullName}</td>
                <td>{email}</td>
                <td>{gender}</td>
                <td>{age}</td>
                <td>{startDate}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
