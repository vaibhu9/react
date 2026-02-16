import React ,{useEffect, useState} from 'react';
import StudentService from '../StudentService';
import {useParams} from 'react-router-dom';

let DeleteStudent=()=>{
    let {stuId}=useParams();
    let [msg,setMsg]=useState("nikhil");

    useEffect(()=>
        {
            let promObject=StudentService.deleteStudent(stuId);
            console.log("Delete Student component called");
          
            promObject.then((res)=>{
                setMsg("Student deleted successfully!!!!!");
            });
        })
    return(
        <>
        {/* <h1 style={{color:"white"}}>Hii i am nikhil rindhe </h1> */}
     <h1>{msg}</h1>
      
        </>);
}
export default DeleteStudent;
