import logo from './logo.svg';
import './App.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import CreateEmployee from "./component/CreateEmployee.js"
import ViewEmployee from "./component/ViewEmployee.js"

function App() {
  return (
    <>
    <BrowserRouter>

    <ul>
      <li>
      <NavLink to="/" >Add Employee</NavLink>
      </li>
      <li>
      <NavLink to="/view-employee" >View Employee</NavLink>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<CreateEmployee/>} />
      <Route path="/view-employee" element={<ViewEmployee/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
