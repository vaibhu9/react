import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import StudentService from '../StudentService';
import { Link } from 'react-router-dom';


let ViewStudent=()=>{

  let [student,setStudent]=useState([]);

  useEffect(()=>{
    StudentService.getAllStudent()
    .then(response=>{
      setStudent(response.data);
    });
  } ,[]);

return(
    <>
    <div className="table-container">
    <table class="table caption-top table-info ">
  <caption class="text-center"><h4>List of Student </h4></caption>
  <thead class="table-danger">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">contact</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {
          student.map((stu)=>(
            <tr key={stu.id}>
        <td>{stu.id}</td>
        <td>{stu.name}</td>
          <td>{stu.email}</td>
          <td>{stu.contact}</td>
        
           
            <td><Link to={`/delstu/${stu.id}`}>DELETE</Link></td>
            <td><Link to={`/updstu/${stu.id}/${stu.name}/${stu.email}/${stu.contact}`}>Update</Link></td>
    </tr>
          ))
      }    
  </tbody>
</table>
</div>


    </>
);
}
export default ViewStudent;

 {/* <button className="btn btn-danger" onClick={()=>StudentService.deleteStudent(student.id)}>Delete</button> */}