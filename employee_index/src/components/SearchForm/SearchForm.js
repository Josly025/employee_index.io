import React from "react";

function SearchForm(props) {
  return (
    <div>
      <div className="container-fluid ">
        <div className="jumbotron bg-warning text-center border border-dark">
          <h1>Employee Index</h1>
          <p>
            {" "}
            | Search by Employee Name, Phone Number, or Age to view their
            Contact Information |{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
