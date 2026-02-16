import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentService from '../StudentService';

let UpdateStudent=()=>{
    let {stuId,stuName,stuEmail,stuContact}=useParams();
   // let { empid, empname, empemail, empcontact } = useParams();
    let [stu,setStu]=useState(
        {
            id:stuId,
            name:stuName,
            email:stuEmail,
            contact:stuContact,
            nameErr:'',
            emailErr:'',
            contactErr:'',
    
        } );
        let [msg,setMsg]=useState("");

        let universalHandler=(e)=>{
            setStu(prevState=>(
                {...prevState,[e.target.name]:e.target.value}));
        };
        let updateStudent=(e)=>{

            e.preventDefault();
          //  let data=JSON.stringify(stu);
            let student={
                id:stu.id,
                name:stu.name,
                email:stu.email,
                contact:stu.contact
            }

            let promiseObject=StudentService.createStudent(student);
            promiseObject.then((response)=>{
                setMsg("Student updated successfully!!!!");

        });
        promiseObject.catch((response)=>{
            setMsg("Error in updating student!!!!");
        });
       
    }
    //=========================
   let validName=(event)=>
    {
     var str=stu.name;
     // alert(str);
     var pattern=/^[A-Za-z ]+$/;
     var res=str.match(pattern);
     if(res!=null){
         setReg((prevState) => ({ ...prevState, nameErr: '' }));
     }
     else{
         setReg((prevState) => ({ ...prevState, nameErr: 'Invalid Name' }));
     }
 }
 
     let validEmail=()=>{
         var str=stu.email;
         var  pattern=/^[a-z0-9*+-_]+@[a-z0-9.*+-_]+\.[a-z]{2,3}$/g
       var res=str.match(pattern);
       if(res!=null)
       {
         setReg((prevState)=>({... prevState,emailErr:''}));
       }
       else{
         setReg((prevState)=>({...prevState,emailErr:"invalid Email"}));
       }
     }
 
     let validNumber=()=>{
         var str=stu.contact;
         var  pattern=/(^[6-9]{1})([0-9]{9})$/;
       var res=str.match(pattern);
       if(res!=null)
       {
         setReg((prevState)=>({... prevState,numErr:''}));
       }
       else{
         setReg((prevState)=>({...prevState,numErr:"invalid Contact"}));
       }
     }
    
return(
    <>

<div className="form-container">
     <div class="form-content">
        <h1>login form </h1>
    
        <input type='text' name='id' value={stu.id} onChange={(e) => uniHandler(e)} /><br /><br />
            <div class="name">
            <input type="text" name="name" value={stu.name} onChange={universalHandler} onKeyUp={validName} placeholder='Your Name' />
           <span>{stu.nameErr}</span>
            </div>
            <div class="email">
            <input type="text" name="email" value={stu.email} onChange={universalHandler} onKeyUp={validEmail} placeholder='Yout Email'/>
            <span>{stu.emailErr}</span>
            </div>
            <div class="contact">
            <input type="text" name="contact"  value={stu.contact} onChange={universalHandler}  onKeyUp={validNumber} placeholder='enter number'/>
            <span>{stu.numErr}</span>
            </div>

            <div class="submit">
                <button type="submit" name="s" onClick={updateStudent}>Add New Student</button>
            </div>

        </div>
        </div>
    <h1>{msg}</h1>
    </>
);
}
export default UpdateStudent;