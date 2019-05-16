import React, { Component } from "react";
import { Container } from "react-bootstrap";



class Companies extends Component {

  render() {
    console.log(this.props, "props");

    const companyList = this.props.companies.map(company => company.companyname);







    return (
<Container >
  {companyList.map((companynames, index) => {
     return<p key={index}>  Current User Company: {companynames}</p>}
  )}



</Container>
)


}
}


export default Companies;
