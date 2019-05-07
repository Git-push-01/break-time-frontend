import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CompaniesForm from "../components/companiesForm";
import ManagersForm from "../components/managersForm";
import EmployeesForm from "../components/employeesForm";
import BreakForm from "../components/breaksForm"


class ProfileContainer extends Component {
  render() {


    return (
      <div>
      <div>
      <a href="/managerContainer" className="btn btn-info" role="button">
        Manager View
      </a>
      </div>
      <br>
      </br>
      <div>
      <a href="/employeeContainer" className="btn btn-info" role="button">
        Employee View
      </a>
      </div>
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
       
       <div>


       </div>
       Add Your Break: <BreakForm />


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
