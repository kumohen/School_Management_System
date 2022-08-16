import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllSubAction} from "../../actions/admin_action"

const MySub = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllSubAction())
   },[])

   const {allSubject} =useSelector(state=>state.getAllSubReducer)
   const {currentUser} = useSelector(state => state.userProfileReducer) ;
   
    const className = currentUser && currentUser[0].clsName ;

    const filterSub = allSubject && allSubject.filter(item => item.sub_class == className)

  


    return (
        <div>
                <table style={{width:"80%",margin:"auto"}}>
        <thead style={{fontSize:"22px"}}>
          <tr>
              <th>No.</th>
              <th >Subject Name</th>
              <th>Subject Code </th>
              <th>SubjectCredit</th>
              <th>Subject Type</th>
          </tr>
        </thead>

        {
           filterSub && filterSub.map((item,index) => (
                <tbody key={item._id} style={{padding:"5px"}}>
                <tr style={{height:"50px"}}>
                    <td>{index+1}</td>
                   <td>{item.sub_name}</td>
                
                  <td>
                  {item.sub_code}
                  </td>
                  <td >
                     {item.sub_credit} 
                  </td>
                  <td >
                     {item.sub_type} 
                  </td>
                </tr>
              
              </tbody>
            ))
        }
      </table>
        </div>
    );
};

export default MySub;