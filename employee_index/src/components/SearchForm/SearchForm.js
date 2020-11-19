import React from "react";

function SearchForm(props) {
  return (
    <div>
      <div className="container-fluid ">
        <div className="jumbotron bg-warning text-center border border-dark">
          <h1>Employee Directory</h1>
          <p>
            {" "}
            | Search by Employee Name or Phone Number to view their contact |{" "}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row"></div>

        <div className="input-group mb-3 col-md">
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-dark"
              type="button"
              id="button-addon1"
              onClick={props.handleFormSubmit}
            >
              Search
            </button>
          </div>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name={props.name}
            id="search"
            type="text"
            className="form-control"
            placeholder="Enter search information"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
