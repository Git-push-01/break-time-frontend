import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";



class Companies extends Component {

  render() {
    console.log(this.props, "props");

    const companyList = this.props.companies.map(company => company.companyname);







    return (
<ListGroup variant="flush">
  <ListGroup.Item>{companyList.map((companynames, index) => {
     return<p key={index}> {companynames}</p>}
  )}</ListGroup.Item>


</ListGroup>
)


}
}


export default Companies;
