import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {acJoinRq,AcReqToJoinClubAction,getClubJoinIssAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"

const ReqClub = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
       dispatch(getClubJoinIssAction())
    },[])

    const {Issues} = useSelector(state => state.getAllIssueReducer)
    const filterIssue = Issues && Issues.filter(item => !item.isIssue)

   

   
    const AcceptReqhandle = (id)=> {
         console.log(id)
         dispatch(acJoinRq(id))
    }

    return (
        <div>
          
            <Titleheading title="Requested By Student To Join Club" />
            <table  className='table table-bordered table-responsive-sm' style={{width:"90%",border:"2px solid black",margin:"auto"}}>
        <thead style={{fontSize:"22px"}} className='thead-dark'>
          <tr>
              <th >ClubName</th>
              <th>UserName </th>
              <th>Class</th>
              <th>Roll No.</th>
              <th>Action</th>
          </tr>
        </thead>

           {filterIssue && filterIssue.map(item =>(
            
                    <tbody key={item._id} style={{padding:"5px"}}>
                <tr >
                   <td>{item.clubName}</td>
                   <td>
                  {item.stuDetail.name}
                  </td>
                  <td>
                  {item.stuDetail.clsName}
                  </td>
                  <td >
                  {item.stuDetail.Roll_No}
                  </td>
                  <td>
                    <button  className='btn btn-success' onClick={() => AcceptReqhandle(item._id)}>Accept</button> 
                    <button className='btn btn-danger'> Delate</button> 
                    
                  </td>
                  
                </tr>
              
              </tbody>
      
           ))}
           
          
      </table>
        </div>
    );
};

export default ReqClub;