import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

class Companies extends Component {
  render() {
    console.log(this.props, "props");

    const companyName = this.props.companies.map(company => company);

    return (
      <Container >
      <div>
        {companyName.map((companynames, index) => {
          return (
            <p key={index}>
            <Button
              onClick={() => this.props.deleteCompany(companynames.id)}
            >
              {" "}
              DELETE{" "}
            </Button>{" "}


              Company Name: {companynames.companyname}
              <br />Company id#:{companynames.id}
            </p>
          );
        })}
      </div>
      </Container>
    );
  }
}

export default Companies;
