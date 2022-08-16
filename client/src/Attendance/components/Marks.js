import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {userProfile} from "../actions/user_action"

const Marks = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
             dispatch(userProfile(userId))
         }

       // dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    return (
        <div>
            <h5>Mark in 3rd kk semester</h5>
            <table style={{width:"80%",border:"2px solid red",paddingLeft:"2%"}}>
        <thead style={{fontSize:"22px"}}>
          <tr>
              <th >Subject</th>
              <th>Mark </th>
              <th>Grade</th>
              <th>Point</th>
          </tr>
        </thead>

        {
           currentUser && currentUser[0].markList && currentUser[0].markList.map(user => (
                <tbody key={user.name} style={{padding:"5px"}}>
                <tr >
                   <td>{user.subject}</td>
                
                  <td>
                  {user.smark}
                  </td>
                  <td style={{fontSize:"19px",fontWeight:"700"}}>
                      {user.smark >= 90 && <>A+</>}
                      {user.smark < 90 && user.smark >= 80 &&  <>A</>}
                      {user.smark < 80 && user.smark >= 70 &&  <>A-</>}
                      {user.smark < 70 && user.smark >= 60 &&  <>B+</>}
                  </td>
                  <td style={{fontSize:"19px",fontWeight:"700"}}>
                      {user.smark >= 90 && <>10</>}
                      {user.smark < 90 && user.smark >= 80 &&  <>9</>}
                      {user.smark < 80 && user.smark >= 70 &&  <>8</>}
                      {user.smark < 70 && user.smark >= 60 &&  <>7</>}
                  </td>
                 
                </tr>
              
              </tbody>
            ))
        }
      </table>
        </div>
    );
};

export default Marks;