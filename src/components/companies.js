import React, { useState, useEffect } from "react";

export default function Companies(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/companies")
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <ul>
        {data.map(company => (
          <ul key={company.id}>{company.companyname}</ul>
        ))}
      </ul>
    </div>
  );
}
