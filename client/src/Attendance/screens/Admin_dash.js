import React,{ useState,useEffect } from 'react';
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getStudentByClass} from "../actions/student_action"
import {logoutUser} from "../actions/user_action"
import Tatten from "../components/Tec_profile/Tatten"
import Matten from "../components/Tec_profile/Matten"
import Signup from "./Auth/Signup"
import TeacherSignUp from './Auth/Tecah_regis';
import Allstudent from "./student/Allstudent"
import Allfaculty from "./AdminPage/ViewFac"
import AddNotice from "./AdminPage/AddNotice"
import ViewNotice from "./AdminPage/ViewNotice"
import AddClub from "./AdminPage/AddClub"
import ReqClub from "./AdminPage/ReqClub"
import ViewCom from "./AdminPage/ViewCom"
import AddSubject from "./AdminPage/AddSub"
import AdminIMage from "../Images/admin2.jpg"


const Home = () => {
  const history = useHistory()

  useEffect(()=>{
     if(localStorage.getItem("admin") == undefined){
      history.push('/landing')
     }
  },[])
 
    const[user,setUser]=useState([])
    const [sClass,setSClass] = useState("")
    const [show,setShow]=useState(false)
    const [cshow,setCshow] = useState(false)
    const [mshow,setMshow] = useState(false)
    const dispatch=useDispatch()
    

    const handleClick = async (value) => {
        var obj = {
            clsName: value
        }
        setSClass(value);
        setShow(true)
        dispatch(getStudentByClass(obj));
    }
    const students=useSelector(state=>state.getStuByClassReducer)
     let classNum = [6,7,8,9,10]

    return (
        <div style={{display:"flex"}}>
           <div style={{height:"880px",background:"gray",width:"13%",paddingLeft:"10px"}}>
           
          <div>
               <ul style={{listStyleType:"none" }}>
                  <li>
                    <Link to={`/admin/dashboard`}  className="link_class">  <i className="fas fa-user-circle"></i> Profile</Link>
                    <hr />
                  </li>
                  <li>
                    <Link to={`/admin/dashboard/addStu`}  className="link_class">
                    <i className="fad fa-user-plus"></i> Add Student</Link> <hr /></li>
                  <li><Link  to={`/admin/dashboard/addFac`} className="link_class" ><i className="far fa-user-plus"></i> Add Faculty</Link><hr /></li>
                  <li><Link to={`/admin/dashboard/viewStu`} className="link_class"> <i className="fas fa-users"></i> View Student</Link><hr /></li> 
                  <li><Link to={`/admin/dashboard/viewFac`} className="link_class"><i className="far fa-user-secret"></i> View Faculty</Link><hr /></li> 
                  <li><Link to={`/admin/dashboard/addClub`} className="link_class"> <i className="fad fa-club"></i> Add Club </Link><hr /></li>
                  <li><Link to={`/admin/dashboard/clubjreq`} className="link_class"> <i className="fab fa-gg-circle"></i> Club  Request</Link><hr /></li>
                  <li><Link to={`/admin/dashboard/complain`} className="link_class"> <i className="fal fa-bug"></i> Check Complain</Link><hr /></li>
                  <li><Link to={`/admin/dashboard/addNotice`} className="link_class"><i className="fas fa-flag-checkered"></i> Upload Notice</Link><hr /></li> 
                  <li><Link to={`/admin/dashboard/viewNotice`} className="link_class"> <i className="fas fa-exclamation-square"></i>  View Notice</Link><hr /></li> 
                  <li><Link to={`/admin/dashboard/addSubject`} className="link_class"> <i className="fas fa-exclamation-square"></i>  Add Subject</Link><hr /></li> 
                  <li  className="link_class" onClick={() => dispatch(logoutUser())} ><i className="fad fa-sign-out"></i> Logout <hr /></li>
                </ul>
                    
          </div>
           {/* <div>
                <p  onClick={() => setCshow(!cshow)} style={{fontSize:"20px",color:"white"}}> 
                <i className="fas fa-user-friends"/> Class</p>
                {cshow && (
                    <ul style={{listStyleType:"none" }}>
                    {classNum.map(item =>(
                        <>
                      <li key={item} onClick={()=> handleClick(item)} style={{color:"white",fontSize:"20px",height:"30px",textDecoration:"none"}}>
                        <Link to={`/teacher/dashboard/attendance`} style={{color:"white",fontSize:"20px",height:"30px",textDecoration:"none"}}>Class {item}</Link></li>
                      <hr style={{color:"black"}} />
                      </>
                    ))}
                    
                </ul>
                )}
                <hr />
            </div> */}
            {/* <div>
                <p  onClick={()=> setMshow(!mshow)} style={{fontSize:"20px",color:"white"}}>  <i className="fas fa-user-crown"></i> Mark</p>
                {mshow && (
                    <ul style={{listStyleType:"none" }}>
                    {classNum.map(item =>(
                        <>
                      <li key={item} onClick={()=> handleClick(item)} >
                        
                        <Link to={`/teacher/dashboard/mark/${item}`}  style={{color:"white",fontSize:"20px",height:"30px",textDecoration:"none"}}>Class {item}</Link></li>
                      <hr style={{color:"black"}} />
                      </>
                    ))}
                    
                </ul>
                )}
                <hr />
            </div>
            <div>
                <p style={{fontSize:"20px",color:"white"}}> <i className="fas fa-exclamation-square"></i> Notice</p>
            </div> */}
           </div>
           <div style={{flex:1}}>
           {history.location.pathname == "/admin/dashboard" && <>
           <div style={{marginLeft:"20%",marginTop:"40px"}}>
                   <img src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"250px",borderRadius:"50%"}} />
                   <br />
                   <h2 style={{marginLeft:"5.5%"}}>Admin </h2> 
                   <br />
                  
                </div>
                 </>
              }

                   <Switch>
                   <Route  path="/admin/dashboard/addStu"  component={Signup}  />
                   <Route  path="/admin/dashboard/addFac"  component={TeacherSignUp}  />
                   <Route  path="/admin/dashboard/viewStu"  component={Allstudent}  />
                   <Route  path="/admin/dashboard/viewFac"  component={Allfaculty}  />
                   <Route  path="/admin/dashboard/addClub"  component={AddClub}  />
                   <Route  path="/admin/dashboard/clubjreq"  component={ReqClub}  />
                   <Route  path="/admin/dashboard/addStu"  component={Matten}  />
                   <Route  path="/admin/dashboard/addSubject"  component={AddSubject}  />
                   <Route  path="/admin/dashboard/complain"  component={ViewCom}  />
                   <Route  path="/admin/dashboard/addNotice"  component={AddNotice}  />
                   <Route  path="/admin/dashboard/viewNotice"  component={ViewNotice}  />
                     <Route  path="/teacher/dashboard/mark/:id"  component={Matten}  />
                     <Route  path="/teacher/dashboard/attendance"  component={Tatten} exact />

                   </Switch>
           </div>

             
        </div>
    );
};

export default Home;