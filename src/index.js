import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,Link,createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Current from './Current';
import Deposit from './Deposit';
import Withdraw from './Cradit';
import Transfer from './Transfer';
const Rot=()=>{
  return<div>
      <Login/>
  </div>
}

const valuer=createBrowserRouter([
  {
      path:"/",
      element:<Login/>
  },{
      path:"/Current",
      element:<Current/>
  },{
      path:"/App",
      element:<App/>
  },{
    path:"/Deposit",
    element:<Deposit/>
},
{
  path:"/Withdraw",
  element:<Withdraw/>
},
{
  path:"/Transfer",
  element:<Transfer/>
}
])
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={valuer}>
<Rot/>
  </RouterProvider>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
