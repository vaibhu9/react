import React from 'react';
import {BrowserRouter,Routes,Route,NavLink} from 'react-router-dom';
 import AddStudent from './Components/AddStudent';
import ViewStudent from './Components/viewStudent';
 import SearchStudent from './Components/SearchStudent';
import DeleteStudent from './Components/DeleteStudent';
import UpdateStudent from './Components/UpdateStudent';


function App() {
 return(
  <>
  <BrowserRouter>
  <ul>
    <li><NavLink to="/">Add New Student</NavLink></li>
  <li><NavLink to="/viewStd">View All Student</NavLink></li>
  <li><NavLink to="/searchStd">serch Student</NavLink></li>

  </ul>
  <Routes>
  <Route path="/" element={<AddStudent/>}/>
  <Route path='/viewStd' element={<ViewStudent/>}/>
  <Route path="/searchStd" element={<SearchStudent/>}/>
  <Route path="/delstu/:stuId" element={<DeleteStudent/>}/>
 
  <Route path="/updstu/:stuId/:stuName/:stuEmail/:stuContact" element={<UpdateStudent/>}></Route>
  </Routes>
  </BrowserRouter>
  </>
 );
}
export default App
