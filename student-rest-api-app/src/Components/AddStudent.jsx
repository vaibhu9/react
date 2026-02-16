import React,{useState} from 'react';
import StudentService from '../StudentService';

let AddStudent=()=>{

    let [reg,setReg]=useState({
                                name:'',
                                email:'',
                                contact:'',
                                nameErr:'',
                                emailErr:'',
                                numErr:'',
                                msg:''
                             });
//------------------------------------------------------------------------------------------------------
                             let universalHandler=(event)=>
                                {
                                    setReg(prevState=>{
                                        return{...prevState,[event.target.name]:event.target.value}
                                    });
                                }
    //---------------------------------------------------------------------------------------------------------
//========================
    let saveStudent=(e)=>{
        console.log("hello");
        e.preventDefault();
    
    let student={
        name:reg.name,
        email:reg.email,
        contact:reg.contact
    }

let promObject=StudentService.createStudent(student);
    //console.log(promObject)
    promObject.then((res)=>{
        
        // console.log("in promises");
        // console.log(res);
        setReg((prevState) => ({ ...prevState, msg: res.data }));
    });
    promObject.catch((res)=>{
        console.log(res);
        setReg((prevState)=>({...prevState,msg: res.data }))
    });
}
//=========================
   let validName=(event)=>
   {
    var str=reg.name;
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
        var str=reg.email;
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
        var str=reg.contact;
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
            <div class="name">
            <input type="text" name="name" value={reg.name} onChange={universalHandler} onKeyUp={validName} placeholder='Your Name' />
           <span>{reg.nameErr}</span>
            </div>
            <div class="email">
            <input type="text" name="email" value={reg.email} onChange={universalHandler} onKeyUp={validEmail} placeholder='Yout Email'/>
            <span>{reg.emailErr}</span>
            </div>
            <div class="contact">
            <input type="text" name="contact"  value={reg.contact} onChange={universalHandler}  onKeyUp={validNumber} placeholder='enter number'/>
            <span>{reg.numErr}</span>
            </div>

            <div class="submit">
                <button type="submit" name="s" onClick={saveStudent}>Add New Student</button>
            </div>

        </div>
        </div>

        <h1>{reg.msg}</h1>

    </>
);

}
export default AddStudent;