import React, { useState, useEffect } from "react";

export default function Managers(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/managers")
      .then(response => response.json())
      .then(data => setData(data));
  }, [], console.log(props));
  

  return (
    <div>
      <ul>
        {data.map(manager => (
          <ul key={manager.id}>{manager.managername}</ul>
        ))}
      </ul>

    </div>
  );
}
