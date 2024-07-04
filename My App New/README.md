# Employee Manager

This is a simple Employee Manager application built with React. It allows you to add employees, view a list of employees, and navigate to each employee's detail page where you can assign tasks to them.

## Features

- Add new employees with name and email.
- Display a list of all employees.
- Navigate to an employee's detail page by clicking on their name in the list.
- Assign tasks to employees on their detail page.

## Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run the application:**

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Components

### `App.js`

The main component that sets up routing and manages the state for employees.

### `EmployeeForm.js`

A form component to add new employees. It takes `addEmployee` as a prop to add a new employee to the state.

### `EmployeeList.js`

A component that displays a list of all employees. It takes `employees` as a prop and displays each employee's name and email.

### `EmployeeDetail.js`

A component that displays the details of a selected employee and allows the admin to assign tasks to the employee. It takes `employees` as a prop and gets the employee's details based on the ID from the URL.

## Styling

All the styles for the components are defined in `App.css`. You can customize the styles as needed.

## Usage

1. **Add an Employee:**

   - Fill in the `Name` and `Email` fields in the form and click the `Add Employee` button.
   - The employee will be added to the list below the form.

2. **View Employee Details:**

   - Click on an employee's name in the list to navigate to their detail page.
   - The detail page will display the employee's name, email, and a list of their tasks.

3. **Assign Tasks:**
   - On the employee's detail page, enter a task in the input field and click the `Add Task` button.
   - The task will be added to the employee's list of tasks.

## Dependencies

- `react`: ^18.0.0
- `react-dom`: ^18.0.0
- `react-router-dom`: ^6.0.0

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is licensed under the MIT License.
