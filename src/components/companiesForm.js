import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import logo from "../images/logo.png";
import { createCompany } from "../redux/actions/companyActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

class CompanyForm extends Component {
  constructor() {
    super();

    this.state = {
      companyname: "",
      user_id: ""
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

    this.props.createCompany(this.state);
    this.setState({
      companyname: "",
      user_id: ""
    });
  }

  render() {
    const { companyname, user_id } = this.state;

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
          <Card style={{ background:'#31e89f', opacity:"0.7"}}>
            <Card.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Label> Enter Company Name</Form.Label>
                <Form.Control
                  name="companyname"
                  placeholder="Company Name"
                  value={companyname}
                  onChange={this.onChange}
                />
                <Form.Label> Enter User id</Form.Label>
                <Form.Control
                  name="user_id"
                  placeholder="User Id"
                  value={user_id}
                  onChange={this.onChange}
                />
                <Button  variant="primary" type="submit">
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
      createCompany
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(CompanyForm);
