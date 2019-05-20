import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { CardGroup, Container, Row } from "react-bootstrap";

// import BreakForm from "../components/breaksForm"

class Breaks extends Component {
  render() {
    console.log(this.props.breaks, " break props");

    const breaksList = this.props.breaks.map(breaks => breaks);





    return (
      <div>
        <Container>
          <Row>
            {breaksList.map((date, index) => {
              return (
                <CardGroup
                  style={{
                    display: "flex",
                    flexDirection: "wrap",
                    justifyContent: "center",
                    padding: 5 + "px",





                  }}
                  key={index}
                >
                  <Card

                    style={{ background:'#31e8e8', opacity:"0.7"}}


                  >

                    <Card.Body>
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
                        Start:
                        <br/>
                        {date.breaketime}

                        <br />
                        End:
                        <br/>
                        {date.breakend}
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
