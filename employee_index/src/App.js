import React, { Component } from "react";
import SearchForm from "./components/SearchForm/SearchForm";
import Employees from "./components/Employees/Employees";

function App() {
  return (
    <div>
      <SearchForm />
      <Employees />;
    </div>
  );
}
export default App;
