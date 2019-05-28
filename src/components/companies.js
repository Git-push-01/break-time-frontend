import React, { Component } from "react";



class Companies extends Component {

  render() {
    console.log(this.props, "props");

    const companyName = this.props.companies.map(company => company);
  







    return (


<div>
  {companyName.map((companynames, index) => {
     return<p  key={index}>
     Company Name: {companynames.companyname}<br></br>Company id#:{companynames.id}</p>}
  )}
  </div>






)


}
}


export default Companies;
