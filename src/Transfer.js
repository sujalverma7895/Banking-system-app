import { useState } from "react";
import { arr } from "./data";
import { Link, useNavigate } from "react-router-dom";
const Transfer = () => {
  let Navigate = useNavigate();
  const [amount, setamount] = useState("")
  const [amountno, setamountno] = useState("")
  const [amountno2, setamountno2] = useState("")
  const task = () => {
    if (amount != "" || amountno != "" || amountno2 != "") {
      const res = arr.find((item) => item.account_no == amountno)
      const res2 = arr.find((item) => item.account_no == amountno2)
      if (res.initial >= amount) {
        res2.initial = parseInt(res2.initial) + parseInt(amount)
        res.initial = parseInt(res.initial) - parseInt(amount)
        setamount("")
        setamountno("")
        Navigate("/App")
      }
      else {
        alert("Your Account Balance less then cradit balance")
        setamount("")
        setamountno("")
      }
    }
    else {
      alert("Enter your Details properly")
    }
  }
  return <div>
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
    <div className="transfer-input">
      <div>Enter  sender Account no.</div>
      <input type="number" onChange={(e) => setamountno(e.target.value)} value={amountno} />
      <div>Enter  receiver Account no.</div>
      <input type="number" onChange={(e) => setamountno2(e.target.value)} value={amountno2} />
      <div>Enter Amount</div>
      <input type="number" onChange={(e) => setamount(e.target.value)} value={amount} />
      <div><button onClick={task}>submit</button></div>
    </div>  
   </div>
}
export default Transfer;