import React, { Component } from "react";
import API from "../utils/API";

class Employees extends Component {
  //States
  state = {
    employees: [],
    search: "",
  };
  //Methods
  componentDidMount() {
    this.searchEmployees("Josh");
  }

  //API Search
  searchEmployees = (query) => {
    API.search(query).then((res) => {
      this.setState({ employees: res.data.results });
      console.log(res.data.results);
    });
  };

  //handling search input
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  //Handle form submission, search the API for the value of "this.state.search"
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchEmployees(this.state.search);
  };

  //Render
  render() {
    return (
      <div className="container">
        <table className="table table-hover">
          <thead className="bg-dark text-warning">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employees) => {
              return (
                <tr>
                  <td>
                    <img alt="img" src={employees.picture.thumbnail}></img>
                  </td>
                  <td>
                    {employees.name.first} {employees.name.last}
                  </td>
                  <td>{employees.email}</td>
                  <td>{employees.phone}</td>
                  <td>{employees.dob.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Employees;
