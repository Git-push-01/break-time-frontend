import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";



class Companies extends Component {

  render() {
    console.log(this.props, "props");

    const companyName = this.props.companies.map(company => company);
    // const company_id = this.props.companies.map(company => company.id)







    return (
<Container >
<Row>
<span>
  {companyName.map((companynames, index) => {
     return<p  key={index}>
     Company Name: {companynames.companyname} | Company id#:{companynames.id}</p>}
  )}
  </span>
  </Row>




</Container>
)


}
}


export default Companies;
