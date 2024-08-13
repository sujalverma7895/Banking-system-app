import { useState } from "react";
import { arr } from "./data";
import { Link,useNavigate } from "react-router-dom";
const Creadit= ()=>{
  let Navigate=useNavigate();
    const [amount,setamount]=useState("")
    const [amountno,setamountno]=useState("")
 const task=()=>{
if(amount!=""||amountno!=""){
    const res =arr.find((item)=>item.account_no==amountno)
    if(res){
      if(res.initial>=amount){
        res.initial=parseInt(res.initial)-parseInt(amount)
        console.log(res)
        setamount("")
        setamountno("")
        Navigate("/App")
        }
        else{
          alert("Your Account Balance less then cradit balance")
          setamount("")
          setamountno("")
        }
    }
    else{
      alert("Enter valid Account no")  
      setamount("")
      setamountno("")
    }
}
}
    return<div>
         <div className='top'>
      <h2>Credit</h2>
      <div className='component-button'>
      <button><Link className='link' to="/Transfer">Transfer</Link></button>
      <button><Link className='link' to="/Withdraw">Withdraw</Link></button>
        <button><Link className='link' to="/Deposit">Deposit</Link></button>
        <button><Link className='link' to="/current">Create Account</Link></button>    
        <button><Link className='link' to="/App">Deashboard</Link></button>
      </div>
      </div>
      <div>Enter Account no.</div>
      <input type="number" onChange={(e)=>setamountno(e.target.value)} value={amountno}/>
      <div>Enter Amount</div>
        <input type="number" onChange={(e)=>setamount(e.target.value)} value={amount}/>
        <div><button onClick={task}>submit</button></div>
    </div>
    }
    export default Creadit;