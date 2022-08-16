import { set } from 'mongoose'
import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {userProfile} from "../../actions/user_action"
import {updateProfileAction} from "../../actions/student_action"
import Titleheading from "../Titleheading"

const EditS  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const[surname,setSurName]=useState("")
    const [mother_name,setMotherName] = useState("")
    const[father_name,setFatherName]=useState("")
    const[dob,setDob]=useState("")
    const[age,setAge]=useState("")
    const[gender,setGender]=useState("")
    const [sClass,setSClass] = useState("")
    const[addyear,setAddYear]=useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [Roll_No,setRoll_No] = useState("")
    const [mobile,setMobile] = useState("")
    const[address,setAddress]=useState("")
    const[userId,setUserId] = useState("")
 
    const dispatch = useDispatch()

  
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const user = JSON.parse(localStorage.getItem("currentUser")).user ;
             setUserId(user._id)
             setName(user.name)
             setSurName(user.surname)
             setMotherName(user.mother_name)
             setFatherName(user.father_name)
             setAge(user.age)
             setGender(user.gender)
             setSClass(user.clsName)
             setAddYear(user.addmision_year)
             setAddress(user.address)
             setMobile(user.mobile)

             dispatch(userProfile(user._id))
         }

      
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;


   
    const handleRequest = ()=>{
        const user = {
            name,surname,mother_name,father_name
          ,gender, clsName:sClass,
            addmision_year:addyear,address
            ,mobile,userId
           
        }
         dispatch(updateProfileAction(user))
       
    }

   return (
      <div className='col-9' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
            <Titleheading title="Edit Profile" />
           
         
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
                <input type="text" class="form-control stregis_incls"   value={gender}
                 onChange={(e)=>setGender(e.target.value)} placeholder="gender" />
           
            </div>
          <div className="col">
                <input type="text" class="form-control stregis_incls"   value={sClass}
                 onChange={(e)=>setSClass(e.target.value)} placeholder="Your Class" />
           
            </div>
          </div>
           <br />
         
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
                
                <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} 
                className="form-control stregis_incls" placeholder='Mobile No'/>
            </div>

        
        </div>
        <br />
       

           <button className='btn btn-success mb-4 mt-2 stregis_incls' onClick={() => handleRequest()}>Edit Profile</button>
      </div>
      </div>
   )
}


export default EditS