import { useState, useEffect } from 'react';
import './App.css';
import img from "./download.jpg"
import { arr } from './data';
import { Link } from 'react-router-dom';
function App() {
  const [data, setdata] = useState("")
  // const arr = [{ acno: 1, init: 1000, name: "sujal", act: "saveing" },
  // { acno: 2, init: 10000, name: "utkarsh", act: "salary" },
  // { acno: 3, init: 2000, name: "vansh", act: "saveing" },
  // { acno: 4, init: 3000, name: "mukul", act: "salary" },
  // { acno: 5, init: 100000, name: "manish", act: "Current" },
  // { acno: 6, init: 100, name: "harsh", act: "saveing" }]

  useEffect(() => {
    setdata(arr);
  }, []);


  const task = (

  ) => {
    const res = arr.filter((item) => {
      if (item.account_type == "Saving") {

        return item
      }
    });
    console.log(res, 'res')
    setdata(res);
  }

  const task1 = () => {
    const res = arr.filter((item) => {
      if (item.account_type == "Current") {
        return item
      }
    });
    setdata(res);
  }
  const task2 = () => {
    const res = arr.filter((item) => {
      if (item.account_type == "Salary") {
        return item
      }
    })
    setdata(res)
  }
  return<div className='dasboard-wrap'>
     <div className='head' >
    <div className='topd'>
      <h2>Deashboard</h2>
      <div className='component-button'>
      <button><Link className='link' to="/Transfer">Transfer</Link></button>
      <button><Link className='link' to="/Withdraw">Withdraw</Link></button>
        <button><Link className='link' to="/Deposit">Deposit</Link></button>
        <button><Link className='link' to="/current">Create Account</Link></button>    
        <button><Link className='link' to="/App">Deashboard</Link></button>
      </div>
    </div>
    <div className='deshbordmain'>
      <div className='left-buttons-div'>
        <div>
          <button className='accutnttype-button' onClick={task}>Saveing</button>
        </div>
        <div>
          <button className='accutnttype-button' onClick={task1}>current</button>
        </div>
        <div>
          <button className='accutnttype-button' onClick={task2}>Salary</button>
        </div>
      </div>
      <div className='dataclass'>
        {data && data.map((item, index) => (
          <div className='data' key={index}>
            <p>Account No:  {item.account_no}</p>
            <p>Balance:  {item.initial}</p>
            <p>Name:  {item.name}</p>
            <p>Account type:  {item.account_type}</p>
          </div>
        ))}
      </div>

    </div>

  </div>
  </div>
}

export default App;
