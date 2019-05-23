import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { CardGroup, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";




class Breaks extends Component {


  render() {
    console.log(this.props.deleteBreak, " break props");

    const breaksList = this.props.breaks.map(breaks => breaks);

    return (
      <div>
        <Container >
        <Col>


          <Row>
            {breaksList.map(breaks => {
              return (
                <CardGroup
                  style={{
                    display: "flex",
                    flexwrap: "wrap-reverse",
                    justifyContent: "center",
                    padding: 5 + "px"
                  }}
                  key={breaks.id}
                >
                  <Card style={{ background: "#31c6e8", opacity: "0.7" }}>
                    <Card.Body>
                      <Card.Text>
                        Employee Name:
                        <br />
                        {breaks.employee.employeename}
                        <br />
                        Break Date:
                        <br />
                        {breaks.breakdate}
                        <br />
                        Break Time:
                        <br />
                        Start:
                        <br />
                        {breaks.breaketime}
                        <br />
                        End:
                        <br />
                        {breaks.breakend}
                        <br />
                        <Button onClick={() => this.props.deleteBreak(breaks.id)}>
                          DELETE
                        </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              );
            })}
            </Row>
            </Col>
        </Container>
      </div>
    );
  }
}

export default Breaks;
