import React, { Component } from "react";
import Employees from "./employees";
import Companies from "./companies";
import Managers from "./managers";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Breaks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div class="break-list">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          placeholderText="Click to select a date/time"
          timeFormat="HH:mm"
          timeIntervals={30}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
      </div>
    );
  }
}

export default Breaks;
