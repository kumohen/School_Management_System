import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {registerUser} from '../../actions/user_action'
import Titleheading from "../../components/Titleheading"
import {CName} from "../../Utills"

const SignUp  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const[surname,setSurName]=useState("")
    const [mother_name,setMotherName] = useState("")
    const[father_name,setFatherName]=useState("")
    const[dob,setDob]=useState("")
    const[age,setAge]=useState("")
   
    const [sClass,setSClass] = useState("")
    const[addyear,setAddYear]=useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [Roll_No,setRoll_No] = useState("")
    const [mobile,setMobile] = useState("")
    const[address,setAddress]=useState("")
    const[selectedOption,setSelectedOption] = useState("")
 
    const dispatch = useDispatch()
   
    const handleRequest = ()=>{
        const user = {
            name,surname,mother_name,father_name,
            date_of_birth:dob,age, clsName:sClass,
            addmision_year:addyear,address,
            password,email,Roll_No,mobile,gender:selectedOption
           
        }
         
       dispatch(registerUser(user))

       setName("");
       setSurName("")
       setMotherName("")
       setFatherName("")
       setDob("")
       setAge("")
       setSClass("")
       setAddYear("")
       setPasword("")
       setEmail("")
       setRoll_No("")
       setMobile("")
       setAddress("") 
    }

   return (
      <div className='col-9' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
            <Titleheading title="Student Registration" />
           
         
          <div className="row">
            <div className="col">
                <input type="text" class="form-control stregis_incls"   
                value={name} onChange={(e)=>setName(e.target.value)} placeholder="First Name" />
           
            </div>
            <div className="col">
                <input type="text" class="form-control stregis_incls"   
                value={surname} onChange={(e)=>setSurName(e.target.value)} placeholder="Sur Name" />
           
            </div>
          
          </div>
          <br />
          <div className="row">
            <div className="col">
                <input type="text" class="form-control stregis_incls"   
                value={mother_name} onChange={(e)=>setMotherName(e.target.value)} placeholder="Mother Name" />
           
            </div>
            <div className="col">
                <input type="text" class="form-control stregis_incls"   
                value={father_name} onChange={(e)=>setFatherName(e.target.value)} placeholder="Father Name" />
           
            </div>
          
          </div>
          <br />
          <div className="row">
            <div className="col">
                <input type="date" class="form-control stregis_incls"   
                value={dob} onChange={(e)=>setDob(e.target.value)} placeholder="Date of Birth" />
           
            </div>
            <div className="col">
                <input type="number" class="form-control stregis_incls"   
                value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Age" />
           
            </div>
          
          </div>
          <br />
          <div className="row">
      
          <div className="col" style={{display:"flex"}}>
                {/* <input type="text" class="form-control stregis_incls"   value={sClass}
                 onChange={(e)=>setSClass(e.target.value)} placeholder="Your Class" /> */}
                   <p style={{ marginRight:"10px",fontSize:"20px" }}>Class:</p>
                 <select value={sClass} id="selectId"  onChange={e => setSClass(e.target.value)}>
                 
                 {CName.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
                 </select>
           
            </div>
            <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input
              type="radio"
              value="Male"
              checked={selectedOption === "Male"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Male
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input
              type="radio"
              value="Female"
              checked={selectedOption === "Female"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Female
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input
              type="radio"
              value="Other"
              checked={selectedOption === "Other"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Other
          </label>
        </div>
           </div>
          </div>
           <br />
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="email"
            value={email}
           className='form-control stregis_incls'
            onChange={(e)=>setEmail(e.target.value)}
            />
            </div>
            <div className="col">
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            className='form-control stregis_incls'
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
            <input
            type="number"
            placeholder="Admission Year"
            value={addyear}
            onChange={(e)=>setAddYear(e.target.value)}
            className='form-control stregis_incls'
            />
            </div>
            <div className="col">
            <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            className='form-control stregis_incls'
            />
            </div>
              </div>
          <br />
          <div className="row">
            <div className="col">
                
            <input
            className='form-control stregis_incls'
            type="number"
            placeholder="Roll_No"
            value={Roll_No}
            onChange={(e)=>setRoll_No(e.target.value)}
           
            />
            </div>
      
            <div className="col">
                
                <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} 
                className="form-control stregis_incls" placeholder='Mobile No'/>
            </div>

        
        </div>
        <br />

       
       

           <button className='btn btn-success mb-4 mt-2 stregis_incls' onClick={() => handleRequest()}>Register</button>
      </div>
      </div>
   )
}


export default SignUp