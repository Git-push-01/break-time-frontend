import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { CardGroup, Container, Row, Col } from "react-bootstrap";

// import BreakForm from "../components/breaksForm"

class Breaks extends Component {
  render() {
    console.log(this.props.breaks, " break props");
    console.log(this.props.user, "user props");
    console.log(this.props, "big Props");

    const breaksDate = this.props.breaks.map(breaks => breaks)
    // const almostUser = breaksDate.filter(user => user === this.props.user)
    // const currentUser = almostUser.find(email => email === this.props.user.email)



    console.log( breaksDate, "list of breaks");
     // console.log( almostUser, "user emails");
     // console.log(currentUser, "current- User ");


    return (
      <div>

        <p  > User: {this.props.user.name}</p>

        <Container>
        <Row>
          {breaksDate.map((date, index) => {
            return (
              <CardGroup
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: 12 + "rem",
                  hight: 12 + "rem",
                  padding: 5 + "px"
                }}
                key={index}
              >
                <Card border="light" bg="dark" text="white" style={{ width: '18rem' }}>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title />
                    <Card.Text>
                      Employee Name:
                      <br />
                      {date.employee.employeename}
                      <br />
                      Break Date:
                      <br />
                      {date.breakdate}
                      <br />
                      Break Time:
                      <br />
                      {date.breaketime}
                      <br />
                      User Name:
                      <br />
                      {date.user.name}
                    </Card.Text>

                  </Card.Body>
                </Card>
              </CardGroup>
            );
          })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Breaks;
