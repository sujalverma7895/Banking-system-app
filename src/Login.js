import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from "./dow.avif"
 const Login = ()=>{
  let Navigate=useNavigate();
    const obj={
        name:"sujal",
        password:"soni"
      }
        const [name, setname]=useState("")
        const [pass, setpass]=useState("")
        const [errn, seterrn]=useState("")
        const [errp, seterrp]=useState("")
      
        const task=()=>{
          if(name==""){
      seterrn("enter your name")
          }
          else{
            seterrn("")
          }
          if(pass==""){
            
      seterrp("enter your password")
          }
          else{
            seterrp("")
          }
          if((name!="")&&(pass!="")){
            if((name==obj.name)&&(pass==obj.password)){
              
              Navigate("/App")
            }
            else{
              alert("wrong password")
            }
          }
        }
        return (
          <div className="main-login"style={{ 
            backgroundImage: `url(${img})` 
          }}>
            <div className='conater'>
              <h2>Login</h2>
              <div>
                <p>Enter your Name</p>
                <input type='text'onChange={(e)=>setname(e.target.value)} value={name}/>
                <div>{errn}</div>
              </div>
              <div>
                <p>Enter your password</p>
                <input type='password' onChange={(e)=>setpass(e.target.value)} value={pass}/>
               <div> {errp}</div>
              </div>
              <div>
              <button onClick={task}>submit</button></div>
            </div>
          </div>
        );
      
    }
    export default Login;
    