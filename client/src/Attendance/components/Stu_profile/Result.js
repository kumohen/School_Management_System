import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {userProfile} from "../../actions/user_action"
import Titleheading from "../Titleheading"
import Pdf from "react-to-pdf";



const Marks = () => {
  const[show,setShow]=useState()
    const dispatch = useDispatch() ;
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
             dispatch(userProfile(userId))
         }

       // dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;

    const ref = React.useRef();


    var pointArr= []
    const calculateCPGA = ()=> {
      currentUser && currentUser[0].markList && currentUser[0].markList.forEach(user => {
         if(user.smark >= 90){
          pointArr.push(10)
         }else if(user.smark < 90 && user.smark >= 80){
          pointArr.push(9)
         }else if(user.smark < 80 && user.smark >= 70){
          pointArr.push(8)
         }else {
          pointArr.push(7)
         }
      })
    }
    
    
    calculateCPGA() ;

    var cgpa = (pointArr.reduce((a, b) => a + b, 0)/pointArr.length)
    return (
        <div>
            {/* <button type="button" onClick={handleDownloadPdf}>
               Download as PDF
          </button> */}
          <div >
              <div >
                  <h4 style={{ textAlign:"center",marginLeft:"-140px",marginBottom:"50px",marginTop:"50px" }}>Your Result Sheet</h4>
              </div>
         
            <table style={{width:"80%",margin:"auto"}} ref={ref}>
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
                <tr style={{height:"50px"}}>
                   <td>{user.subject}</td>
                
                  <td>
                  {user.smark}
                  </td>
                  <td >
                      {user.smark >= 90 && <>A+</>}
                      {user.smark < 90 && user.smark >= 80 &&  <>A</>}
                      {user.smark < 80 && user.smark >= 70 &&  <>A-</>}
                      {user.smark < 70 && user.smark >= 60 &&  <>B+</>}
                  </td>
                  <td >
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
      
      <hr />
      <div style={{width:"55%",margin:"auto"}}>
          <p style={{float:"right" }}>CGPA:<b> {cgpa.toFixed(2)} </b></p>
      </div>
      </div>
      <div>
     
    
      </div>



        </div>
    );
};

export default Marks;