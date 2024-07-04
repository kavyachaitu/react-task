import { useState } from "react";
import EmployeeList from "./components/employee details/Employee-List";
import EmployeeForm from "./components/employee details/Employee-form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeDetail from "./components/employee details/Employee-Details";
import "./assets/css/employee.css";

function App() {
  const [employees, setEmployees] = useState([]);

  const addEmployee = (employee) => {
    setEmployees([...employees, { ...employee, tasks: [] }]);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <EmployeeForm addEmployee={addEmployee} />
                <EmployeeList employees={employees} />
              </>
            }
          />
          <Route
            path="/employee/:id"
            element={<EmployeeDetail employees={employees} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
