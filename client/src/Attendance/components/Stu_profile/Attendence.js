import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {Pie, Doughnut} from 'react-chartjs-2';

import {userProfile} from "../../actions/user_action"

import moment from 'moment'

const Attendance = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
         if(localStorage.getItem("currentUser")){
             const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
             dispatch(userProfile(userId))
         }

       // dispatch(userProfile())
    },[])
    const {currentUser} = useSelector(state => state.userProfileReducer) ;

    console.log(currentUser)
    
    var Dataset = []

    const funData = ()=>{
        let pt = 0 , ab = 0 ;
        currentUser && currentUser[0].attdenList && currentUser[0].attdenList.map(item => {
             if(item.type == "present"){
                pt += 1
             } else {
                ab += 1 ;
             }
        })
        Dataset.push(pt);

        Dataset.push(ab);
    }

    funData();

    const percentage =(Dataset[0] / (Dataset[0]+Dataset[1]))*100 
    

    const stateData = {
      labels: ['Present', 'Absent'],
      datasets: [
        {
          label: 'Attendance',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
        
          ],
          data: Dataset
        }
      ]
    }

    const setclasssfun= (value)=> {
       if(value == "absent"){
        return true
       } else {
        return false 
       }
    }

    return (
   
           

           <div >

           <div style={{marginTop:"20px"}}>
            
         
             <table className='table table-bordered table-responsive-sm' style={{width:"80%",margin:"auto"}}>
        <thead style={{fontSize:"22px"}}>
          <tr>
              <th >Date</th>
              <th>Attendance By</th>
              <th>Status</th>
             
          </tr>
        </thead>

        {
           currentUser && currentUser[0].attdenList && currentUser[0].attdenList.map(user => (
                <tbody key={user.name} style={{padding:"5px"}}>
                <tr className= { setclasssfun(user.type) ? "table-danger" : "table-success" }>
                   <td>{moment.unix(user.timestamp/1000).format("DD MMM YYYY")}</td>
                
                  <td>
                  {user.madeBy}
                  </td>
                  <td >
                  {user.type}
                  </td>
                  <td>
                     
                
                  </td>
                </tr>
              
              </tbody>
            ))
        }
      </table>
           </div>

            <div style={{display:"flex", width:"80%", margin:"auto"}}>
            <div style={{height:"600px",width:"600px"}}>
              <Pie
              data={stateData}
              options={{
                title:{
                  display:true,
                  text:'',
                  fontSize:20
                },
                legend:{
                  display:true,
                  position:'right'
                }
              }}
            />
              </div>
              <div style={{ marginLeft:"50px",marginTop:"70px" }}>
                 <p style={{fontSize:"150px"}}>{Math.ceil(percentage)}%</p>
              </div>
            </div>
     
        
      
      </div>
    );
};

export default Attendance;