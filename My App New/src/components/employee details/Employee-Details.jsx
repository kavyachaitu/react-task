import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees[parseInt(id)];
  const [tasks, setTasks] = useState(employee.tasks || []);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask("");
  };

  return (
    <div>
      <h2>Employee Detail</h2>
      {employee ? (
        <div>
          <p>Name: {employee.name}</p>
          <p>Email: {employee.email}</p>
          <h3>Tasks</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      ) : (
        <p>Employee not found.</p>
      )}
    </div>
  );
}

export default EmployeeDetail;
