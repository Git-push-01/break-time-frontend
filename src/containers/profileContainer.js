import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CompaniesForm from "../components/companiesForm";
import ManagersForm from "../components/managersForm";
import EmployeesForm from "../components/employeesForm";


class ProfileContainer extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
      <a href="/managerContainer" className="btn btn-info" role="button">
        Manager View
      </a><br></br><a href="/employeeContainer" className="btn btn-info" role="button">
        Employee View
      </a>
      <br>
      </br>
      <a href="/companyContainer" className="btn btn-info" role="button">
        Company View
      </a>
      <div>


       Add Your Company: <CompaniesForm />
       </div>
       Add Your Manager: <ManagersForm />

       <div>
       Add Your Employee: <EmployeesForm />

       </div>
       <br>
       </br>

      <div>
        <a href="/signup" className="btn btn-info" role="button">
          Log Out
        </a>
        </div>



      </div>
    );
  }
}

export default withRouter(ProfileContainer);
