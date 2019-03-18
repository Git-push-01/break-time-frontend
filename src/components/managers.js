import React from "react";

const Managers = props => {
  console.log(props.managers);

  const getManagers = () => {
    return props.managers.map(manager => (
      <ul>
        <div>Managers ID#: {manager.id}</div>
        <div>Managers Name: {manager.managername}</div>
        <div>Company: {manager.company.companyname}</div>
      </ul>
    ));
  };

  return (
    <div>
      <ul>{getManagers()}</ul>
    </div>
  );
};

export default Managers;
