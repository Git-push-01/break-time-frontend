import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { CardGroup, Container } from "react-bootstrap";
// import BreakForm from "../components/breaksForm"

class Breaks extends Component {
  render() {
    console.log(this.props, "props");

    const breaksDate = this.props.breaks.map(date => date.breakdate);
    const breaksTime = this.props.breaks.map(time => time.breakdate);
    console.log(breaksTime, "time");

    return (
      <div>
        <Container>
          {breaksDate.map((date, index) => {
            return (
              <CardGroup
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  width: 15 + "rem"
                }}
                key={index}
              >
                <Card>
                  <Card.Img variant="top" />
                  <Card.Body>
                    <Card.Title />
                    <Card.Text>
                    {date}
                    <Card.Text>
                    
                    </Card.Text>
                    </Card.Text>
                    <Button variant="primary">See Employee Breaks</Button>
                  </Card.Body>
                </Card>
              </CardGroup>
            );
          })}
        </Container>
      </div>
    );
  }
}

export default Breaks;
