import React,{useState,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import {Link,useHistory} from 'react-router-dom'
import {updateTProfileAction} from '../../actions/student_action'
import Titleheading from "../../components/Titleheading"
import { userProfile } from '../../actions/user_action'


const TEdit  = ({match})=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const[surname,setSurName]=useState("")
     
    
    const[gender,setGender]=useState("")
    const[teachArea,setTeachArea]=useState("")
    const[addyear,setAddYear]=useState("")
  
    const [email,setEmail] = useState("")
    const[qulification,setQulification]=useState("")
    const [mobile,setMobile] = useState("")
    const[address,setAddress]=useState("")
 
    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(userProfile(match.params.id,"Teacher"))
    },[match.params.id])

    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    
    useEffect(()=> {
        if(currentUser){
            setName(currentUser[0].name)
            setSurName(currentUser[0].surname)
            setGender(currentUser[0].gender)
            setTeachArea(currentUser[0].teaching_area)
            setAddYear(currentUser[0].joining_year)
            setEmail(currentUser[0].email)
            setQulification(currentUser[0].qulification)
            setMobile(currentUser[0].mobile)
            setAddress(currentUser[0].address)
        }
    },[currentUser])

    const handleRequest = ()=>{
        const user = {
            name,surname
            ,gender, qulification,
            joining_year:addyear,address,
            email,mobile,
            teaching_area:teachArea,
            userId : currentUser[0]._id
        }

       
       
      dispatch(updateTProfileAction(user))
    }

   return (
      <div className='col-9' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
             <Titleheading  title="Teacher Registration"/>
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
                <input type="text" class="form-control stregis_incls"   value={gender}
                 onChange={(e)=>setGender(e.target.value)} placeholder="gender" />
           
            </div>
          <div className="col">
                <input type="text" class="form-control stregis_incls"   value={teachArea}
                 onChange={(e)=>setTeachArea(e.target.value)} placeholder="Your Teaching field" />
           
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
            type="text"
            placeholder="Qualification"
            value={qulification}
           className='form-control stregis_incls'
            onChange={(e)=>setQulification(e.target.value)}
            />
            </div>
         
          
          </div>
          <br />
              <div className="row">
              <div className="col">
            <input
            type="number"
            placeholder="Joining Year"
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
                
                <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} className="form-control stregis_incls" placeholder='Mobile No'/>
            </div>

        
        </div>
        <br />
       

           <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Submit</button>
      </div>
      </div>
   )
}


export default TEdit