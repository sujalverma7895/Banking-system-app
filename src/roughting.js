import React from "react";
import { RouterProvider,Link,createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Current from "./Current";
import App from "./App";
import ReactDOM from 'react-dom'
const Rot=()=>{
    return<div>
        <Login/>
    </div>
}
 const valuer=createBrowserRouter([
    {
        path:"./",
        element:<App/>
    },{
        path:"./Current",
        element:<Current/>
    },{
        path:"./Login",
        element:<Login/>
    },
])
let root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={valuer}>

<Rot/>
    </RouterProvider>
)