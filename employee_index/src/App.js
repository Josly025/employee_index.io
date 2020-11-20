import React, { Component } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import API from "./components/utils/API.js";

class App extends Component {
  //States
  state = {
    search: "",
    employees: [],
  };

  //
  //Inital set of Employees // make sure to reload page later
  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.thumbnail,
            email: e.email,
            phone: e.phone,
            dob: e.dob.age,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  // //API Search Call from API.js
  // searchEmployees = (query) => {
  //   API.search(query).then((res) => {
  //     this.setState({ employees: res.data.results });
  //     console.log(res.data.results);
  //   });
  // };s

  //Refresh page after search
  refreshPage = () => {
    console.log("clicked");
    window.location.reload();
  };

  searchEmployees = (filter) => {
    console.log("Search", filter);
    const filteredList = this.state.employees.filter((employee) => {
      // merge data together, then check to see if employee exists
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    // Update the employee list with the filtered value
    this.setState({ employees: filteredList });
  };

  //handling search input
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
    console.log(value);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Button Clicked", this.state.search, e);
    this.searchEmployees(this.state.search);
  };

  //Render
  render() {
    return (
      <div>
        <SearchForm />
        <div className="container">
          <div className="row"></div>
          <div className="input-group mb-3 col-md">
            <div className="input-group-prepend">
              <button
                className="btn btn-outline-dark"
                type="button"
                id="button-addon1"
                onClick={this.refreshPage}
              >
                All Employees
              </button>
              <button
                className="btn btn-outline-dark"
                type="button"
                id="button-addon1"
                onClick={this.handleFormSubmit}
              >
                Search
              </button>
            </div>
            <input
              onChange={this.handleInputChange}
              value={this.value}
              name="search"
              type="text"
              className="form-control"
              placeholder="Enter search information"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            ></input>
          </div>
        </div>

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
              {[...this.state.employees].map((data) => (
                <tr>
                  <td>
                    <img alt="img" src={data.picture}></img>
                  </td>
                  <td>
                    {data.firstName} {data.lastName}
                  </td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.dob}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
