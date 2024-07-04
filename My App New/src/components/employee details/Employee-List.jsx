import React from "react";
import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.length ? (
          employees.map((employee, index) => (
            <li key={index}>
              <Link to={`/employee/${index}`}>{employee.name}</Link> -{" "}
              {employee.email}
            </li>
          ))
        ) : (
          <li>No employees added yet.</li>
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
