import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {registerUser} from '../actions/user_action'

const SignUp  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [Roll_No,setRoll_No] = useState("")
    const [mobile,setMobile] = useState("")
    const [sClass,setSClass] = useState("")
 
    const dispatch = useDispatch()
   
    const handleRequest = ()=>{
        const user = {
            name,password,email,Roll_No,mobile,
            clsName:sClass
        }
        dispatch(registerUser(user))
    }

   return (
      <div className='col-5' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
          <h4 style={{margin:"auto",marginBottom:"20px"}}>Registration</h4>
          <div className="row">
            <div className="col">
                <input type="text" class="form-control"   
                value={name} onChange={(e)=>setName(e.target.value)} placeholder="First Name" />
           
            </div>
          
          </div>
          <br />
          <div className="row">
          <div className="col">
                <input type="text" class="form-control"   value={sClass}
                 onChange={(e)=>setSClass(e.target.value)} placeholder="Your Class" />
           
            </div>
          </div>
           <br />
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="email"
            value={email}
           className='form-control'
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            className='form-control'
            />
            </div>
              </div>
          <br />
          <div className="row">
            <div className="col">
                
            <input
            className='form-control'
            type="text"
            placeholder="Roll_No"
            value={Roll_No}
            onChange={(e)=>setRoll_No(e.target.value)}
           
            />
            </div>
      


        
        </div>
        <br />
        <div className="row">
            <div className="col">
                
                <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} className="form-control" placeholder='Mobile No'/>
            </div>
     

        
        </div>
         <br />

           <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Register</button>
      </div>
      </div>
   )
}


export default SignUp