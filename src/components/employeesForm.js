import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import logo from "../images/logo.png";
import { createEmployee } from "../redux/actions/employeeActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

class EmployeeForm extends Component {
  constructor() {
    super();

    this.state = {
      employeename: "",
      user_id: "",
      company_id: "",
      manager_id: ""
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

    this.props.createEmployee(this.state);
    this.setState({
      employeename: "",
      user_id: "",
      company_id: "",
      manager_id: ""
    });
  }

  render() {
    const { employeename, user_id, company_id, manager_id } = this.state;

    return (
      <div>
        <img src={logo} alt="Logo" />
        <span>
          <a href="/ProfileContainer" className="btn btn-info" role="button">
            Back To Profile
          </a>
        </span>
        <Container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Card
          style={{ background:'#31e8e8', opacity:"0.7"}}

          >
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Label> Enter Employee Name </Form.Label>
                <Form.Control
                  name="employeename"
                  placeholder="Employee Name"
                  value={employeename}
                  onChange={this.onChange}
                />
                <Form.Label> Enter User id</Form.Label>

                <Form.Control
                  name="user_id"
                  placeholder=" User id#"
                  value={user_id}
                  onChange={this.onChange}
                />
                <Form.Label> Enter Company id</Form.Label>

                <Form.Control
                  name="company_id"
                  placeholder=" Company id#"
                  value={company_id}
                  onChange={this.onChange}
                />
                <Form.Label> Enter Manager id</Form.Label>

                <Form.Control
                  name="manager_id"
                  placeholder=" Manager id#"
                  value={manager_id}
                  onChange={this.onChange}
                />
                <Button  variant="primary" type="submit">Add</Button>
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
      createEmployee
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(EmployeeForm);
