import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBreak } from "../redux/actions/breakActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import logo from "../images/logo.png";

class BreakForm extends Component {
  constructor() {
    super();

    this.state = {
      breakdate: "",
      breaketime: "",
      breakend: "",
      user_id: "",
      employee_id: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const field = e.target.name;
    let state = this.state;

    state[field] = e.target.value;
    this.setState(state);
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.createBreak(this.state);
    this.setState({
      breakdate: "",
      breaketime: "",
      breakend: "",
      user_id: "",
      employee_id: ""
    });
  }

  render() {
    const {
      breakdate,
      breaketime,
      breakend,
      user_id,
      employee_id
    } = this.state;

    return (
      <div >
        <img src={logo} alt="Logo" />
        <span>
          <a href="/ProfileContainer" className="btn btn-info" role="button">
            Back To Profile
          </a>
        </span>
        <Container style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}>
        <Card
        style={{ background:'#31e89f', opacity:"0.8", text:"black"}}




        >
          <Card.Body>
            <Form  onSubmit={this.onSubmit}>
              <Form.Label>Enter Date</Form.Label>
              <Form.Control
                type="date"
                name="breakdate"
                value={breakdate}
                onChange={this.onChange}
              />
              <Form.Label>Break Start Time</Form.Label>
              <Form.Control
                type="time"
                name="breaketime"
                placeholder="Break Start"
                value={breaketime}
                onChange={this.onChange}
              />
              <Form.Label>Break End Time</Form.Label>
              <Form.Control
                type="time"
                name="breakend"
                placeholder="Break End"
                value={breakend}
                onChange={this.onChange}
              />
              <Form.Label>User id</Form.Label>

              <Form.Control
                name="user_id"
                placeholder="Enter User Id"
                value={user_id}
                onChange={this.onChange}
              />
              <Form.Label>Employee id</Form.Label>
              <Form.Control
                name="employee_id"
                placeholder="Enter Employee Id"
                value={employee_id}
                onChange={this.onChange}
              />
              <Button variant="primary" type="submit">
                Add
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      createBreak
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(BreakForm);
