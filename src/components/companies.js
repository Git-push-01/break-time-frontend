import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";



class Companies extends Component {

  render() {
    console.log(this.props, "props");

    const companyList = this.props.companies.map(company => company.companyname);
    const userList = this.props.companies.map(company => company.user.name);
    const managerList = this.props.managers.map(manager => manager.managername)




    return (
<ListGroup variant="flush">
  <ListGroup.Item>{companyList.map(companynames => (<p>{companynames}</p>))}</ListGroup.Item>
  <ListGroup.Item>{userList.map(username => (<p>{username}</p>))}</ListGroup.Item>
  <ListGroup.Item>{managerList.map(managername => (<p>{managername}</p>))}</ListGroup.Item>

</ListGroup>

    );
  }
}

export default Companies;
