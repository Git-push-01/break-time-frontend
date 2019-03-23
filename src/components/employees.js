import React, { useState, useEffect } from "react";

export default function Employees(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <ul>
        {data.map(employee => (
          <ul key={employee.id}>{employee.employeename}</ul>
        ))}
      </ul>
    </div>
  );
}
