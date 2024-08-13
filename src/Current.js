import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import img from "./dow.avif"
// import App from './App';
import { arr } from './data';
const Current = () => {
    const [acty, setacty] = useState("")
    const [acno, setacno] = useState("")
    const [init, setinit] = useState("")
    const [name, setname] = useState("")
    const [err1, seterr1] = useState("")
    const [err2, seterr2] = useState("")
    const [err3, seterr3] = useState("")
    const [err4, seterr4] = useState("")
    let Navigate=useNavigate();
    const task = () => {
        if (acno == "" || init == "" || name == ""||acty=="") {
            if (acty == "") {
                seterr4("Fill this entery")
            }
            else {
                seterr4("")
            }
            if (acno == "") {
                seterr1("Fill this entery")
            }
            else {
                seterr1("")
            }
            if (init == "") {
                seterr2("Fill this entery")
            }
            else {
                seterr2("")
            }
            if (name == "") {
                seterr3("Fill this entery")
            }
            else {
                seterr3("")
            }
        }
        else {
            const result = arr.filter((item) => {
                if (item.account_no == acno) {
                    return item.account_no
                }
            });

            if (result.length > 0) {
                alert("account no is alrady exist")
            } else {
                const obj = {};
                obj.account_no = acno;
                obj.initial = init;
                obj.name = name;
                obj.account_type=acty;
                arr.push(obj)
                console.log(arr);
                Navigate("/App")
                setacno("")
                setinit('')
                setname('')
                setacty("")
            }
        }
    }
    return <div>
        <div className='main-login'style={{ 
            backgroundImage: `url(${img})` 
          }}>
            <div className='conater'>
                <select onChange={(e)=>setacty(e.target.value)}>
                    <option value="">Account type</option>
                    <option value="Salary">Salary </option>
                    <option value="Saving">Saving</option>
                    <option value="Current">Current</option>
                </select>
                <p>{err4}</p>
                <div>
                    <input type='number' placeholder='Ac Number' onChange={(e) => setacno(e.target.value)} value={acno} />
                    <p>{err1}</p>
                </div>
                <div>
                    <input type='number' placeholder='Initial Amount' onChange={(e) => setinit(e.target.value)} value={init} />
                    <p> {err2}</p>
                </div>
                <div>
                    <input type='text' placeholder='Name' onChange={(e) => setname(e.target.value)} value={name} />
                    <p> {err3}</p>
                </div>
                <button onClick={task}>submit</button>
            </div>
        </div>

    </div>
}
export default Current;