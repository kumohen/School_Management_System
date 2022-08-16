import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Switch,Route,Link,useHistory } from 'react-router-dom';
import {userProfile,logoutUser} from "../actions/user_action"
import Marks from "../components/Stu_profile/Result"
import Attendance from "../components/Stu_profile/Attendence"
import Subj from '../components/Stu_profile/Subj';
import Complain from "../components/Stu_profile/Complain"
import Clubs from "./student/Clubs"
import Payment from "./student/Payment"
import MySub from "./student/MySub"
import EditS from "../components/Stu_profile/EditS"
import MyTimeTable from "./student/MyTimeTable"
import Sprofile from "../components/Stu_profile/Sprofile"
import ViewNotice from "./AdminPage/ViewNotice"




const Profile = () => {
    const dispatch = useDispatch() ;
    const history = useHistory()
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
             dispatch(userProfile(userId))
         }

       // dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;



    return (
      <div >
        <div style={{display:"flex"}}>

           

           <div style={{height:"880px",background:"gray",width:"10%",paddingTop:"1%"}}>
              
               <div>
                <ul style={{listStyleType:"none" }}>
                  <li><Link to={`/student/dashboard`} className="link_class"><i className="fas fa-user-circle"></i> Profile</Link> <hr /></li>
                  <li><Link to={`/student/dashboard/attendance`} className="link_class"><i className="fas fa-calendar-plus"></i> Attendance</Link><hr /></li>
                  <li><Link  to={`/student/dashboard/timetable`}className="link_class" ><i className="fal fa-table"></i> TimeTable</Link><hr /></li>
                  <li><Link  to={`/student/dashboard/mark`}className="link_class" ><i className="fas fa-poll-people"></i> Result</Link><hr /></li>
                  <li><Link to={`/student/dashboard/subject`} className="link_class"><i className="fad fa-books"></i> Subject</Link><hr /></li> 
                  <li> <Link to={`/student/dashboard/joinclub`} className="link_class"><i className="fab fa-gg-circle"></i> Join Club</Link> <hr /></li>
                  <li><Link to={`/student/dashboard/report`} className="link_class"><i className="fal fa-bug"></i> Complain</Link><hr /></li>
                  <li><Link to={`/student/dashboard/notice`} className="link_class"><i className="fas fa-exclamation-square"></i> Notice</Link><hr /></li> 
                  <li><Link to={`/student/dashboard/payment`} className="link_class"><i className="fab fa-amazon-pay"></i> Payment</Link><hr /></li>
                  <li onClick={() => dispatch(logoutUser())} className="link_class"> <i className="fad fa-sign-out"></i> Logout<hr /></li>
                </ul>
                   

                 
               </div>
            
           </div>
           <div style={{flex:"1",marginLeft:"2%"}}>
              {history.location.pathname == "/student/dashboard" && <>
                  <Sprofile  user={currentUser} /> </>
              }
             
           
           <Switch>
                     <Route  path="/student/dashboard/mark"  component={Marks} />
                     <Route  path="/student/dashboard/attendance"  component={Attendance} />
                     <Route  path="/student/dashboard/subject"  component={MySub} />
                     <Route  path="/student/dashboard/report"  component={Complain} />
                     <Route  path="/student/dashboard/joinclub"  component={Clubs} />
                     <Route  path="/student/dashboard/notice"  component={ViewNotice} />
                     <Route  path="/student/dashboard/payment"  component={Payment} />
                     <Route  path="/student/dashboard/timetable"  component={MyTimeTable} />
                     <Route  path="/student/dashboard/edit"  component={EditS} />
                   </Switch>
       
           </div>
        </div>
        
      
      </div>
    );
};

export default Profile;