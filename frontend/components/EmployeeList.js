import React, { useEffect, useState } from "react";
import EmployeeForm from "./EmployeeForm";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then(res => res.json())
      .then(data => setEmployees(data));
  }, []);

  return (
    <div>
      <EmployeeForm />
      <ul>
        {employees.map(emp => (
          <li key={emp.id}>
            {emp.name} - {emp.position}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
