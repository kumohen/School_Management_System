import React,{ useState,useEffect } from 'react';
import StuList from "./StuList"
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {getStudentByClass} from "./actions/student_action"
import Tatten from "./components/Tec_profile/Tatten"
import Matten from "./components/Tec_profile/Matten"
import Tprofile from "./components/Tec_profile/Tprofile"
import ViewNotice from "./screens/AdminPage/ViewNotice"
import Complain from "./components/Stu_profile/Complain"
import TEdit from "./components/Tec_profile/TEdit"
import {userProfile,logoutUser} from "./actions/user_action"


const Home = () => {
    const[user,setUser]=useState([])
    const [sClass,setSClass] = useState("")
    const [show,setShow]=useState(false)
    const [cshow,setCshow] = useState(false)
    const [mshow,setMshow] = useState(false)

    const dispatch = useDispatch() ;
    const history = useHistory()
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
             dispatch(userProfile(userId,"Teacher"))
         }

       // dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    console.log(currentUser)
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
           <Link to={`/teacher/dashboard`} className="link_class"> <i className="fas fa-exclamation-square"></i> Profile</Link>
           <hr style={{color:"black"}} />
            </div>
           <div>
                <p  onClick={() => setCshow(!cshow)} style={{fontSize:"20px",color:"white"}}> 
                <i className="fas fa-user-friends"/> Make Attendance</p>
                {cshow && (
                    <ul style={{listStyleType:"none" }}>
                    {classNum.map(item =>(
                        <>
                      <li key={item} onClick={()=> handleClick(item)} style={{color:"white",fontSize:"20px",height:"30px",textDecoration:"none"}}>
                        <Link to={`/teacher/dashboard/attendance/${item}`} style={{color:"white",fontSize:"20px",height:"30px",textDecoration:"none"}}>Class {item}</Link></li>
                      <hr style={{color:"black"}} />
                      </>
                    ))}
                    
                </ul>
                )}
                <hr />
            </div>
            <div>
                <p  onClick={()=> setMshow(!mshow)} style={{fontSize:"20px",color:"white"}}>  <i className="fas fa-user-crown"></i>Upload Mark</p>
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
                <p style={{fontSize:"20px",color:"white"}}> 
                 <Link to={`/teacher/dashboard/notice`} className="link_class"> <i className="fas fa-exclamation-square"></i> Notice</Link></p>
                 <hr style={{color:"black"}} />
            </div>
            <div>
              <p style={{fontSize:"20px",color:"white"}}>    <Link to={`/teacher/dashboard/report`} className="link_class"><i className="fal fa-bug"></i> Complain</Link></p>
              <hr style={{color:"black"}} />
            </div>
            <div>
                <p style={{fontSize:"20px",color:"white"}}> <i className="fas fa-exclamation-square"  onClick={() => dispatch(logoutUser())}></i> Logout</p>
            </div>
           </div>
           <div style={{flex:1}}>
                {/* <ul>
                    <li>attendance</li>
                    <li>marks student</li>
                </ul> */}
                   {history.location.pathname == "/teacher/dashboard" && <>
                  <Tprofile  user={currentUser} /> </>
              }
             
                   <Switch>
                    
                     <Route  path="/teacher/dashboard/mark/:id"  component={Matten}  />
                     <Route  path="/teacher/dashboard/attendance/:id"  component={Tatten} exact />
                     <Route  path="/teacher/dashboard/notice"  component={ViewNotice} exact />
                     <Route  path="/teacher/dashboard/edit/:id"  component={TEdit}  />
                     <Route  path="/teacher/dashboard/report"  component={Complain} />
                   </Switch>
           </div>

             {/* <div style={{display:"flex"}}>
                <div style={{height:"440px",background:"gray",width:"10%"}}>
                    <ul style={{listStyleType:"none" }}>
                        {classNum.map(item =>(
                            <>
                          <li key={item} onClick={()=> handleClick(item)} style={{color:"white",fontSize:"20px",height:"30px",}}>Class {item}</li>
                          <hr style={{color:"black"}} />
                          </>
                        ))}
                        
                    </ul>
                  
                </div>
                <div style={{marginLeft:"2%",flex:1}}>
                    <h3>Make Attendance at {new Date().toISOString().slice(0, 10)}</h3>
                  {show &&   <StuList sClass={sClass} students={students} mark={false} /> } 
                </div>
            </div> */}
            {/* <div style={{display:"flex"}}>
                <div style={{height:"440px",background:"gray",width:"10%"}}>
                    <ul style={{listStyleType:"none" }}>
                        {classNum.map(item =>(
                            <>
                          <li key={item} onClick={()=> handleClick(item)} style={{color:"white",fontSize:"20px",height:"30px",}}>Class {item}</li>
                          <hr style={{color:"black"}} />
                          </>
                        ))}
                        
                    </ul>
                  
                </div>
                <div style={{marginLeft:"2%",flex:1}}>
                    <h3>Make Attendance at {new Date().toISOString().slice(0, 10)}</h3>
                  {show &&   <StuList sClass={sClass} students={students} mark={true} /> } 
                </div>
            </div>  */}
        </div>
    );
};

export default Home;