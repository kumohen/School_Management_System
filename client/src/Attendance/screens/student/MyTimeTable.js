import React,{useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllSubAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"

const MyTimeTable = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllSubAction())
   },[])

   const {allSubject} =useSelector(state=>state.getAllSubReducer)
   const {currentUser} = useSelector(state => state.userProfileReducer) ;
   
    const className = currentUser && currentUser[0].clsName ;

    const filterSub = allSubject && allSubject.filter(item => item.sub_class == className)
   var TheroSub = []
   var PracSub = []
    const sepSub = ()=> {
        
        filterSub && filterSub.map((item)=>{
            if(item.sub_type == "Theory"){
                TheroSub.push(item.sub_name)
            } else{
                PracSub.push(item.sub_name)
            }
        })
    }

    sepSub();
 

    return (
        <div style={{width:"80%",margin:"auto"}}>
               <Titleheading title="My Timetable for Classes" />
                <table  className='table table-bordered table-responsive-sm' >
        <thead >
          <tr style={{height:"100px"}}>
            
              <th >9:30AM-10:20AM</th>
              <th>10:20AM-11:10AM </th>
              <th>11:10AM:12.30PM</th>
              <th>12.30PM-1:30PM</th>
              <th >1:30PM-2:20PM</th>
              <th>2:20PM-3:10PM </th>
              <th>3:10PM:4.30PM</th>
          </tr>
        </thead>

        
          
                <tbody  style={{padding:"5px"}}>
                <tr style={{height:"100px",paddingTop:"50px"}}>
                    <td> {TheroSub[0]} </td>
                   <td>{TheroSub[1]}</td>
                
                  <td>
                     {PracSub[0]}
                  </td>
                  <td >
                    Break
                  </td>
                  <td >
                  {TheroSub[2]}
                  </td>
                  <td >
                   {TheroSub[3]}
                  </td>
                  <td >
                     {PracSub[1]}
                  </td>
                </tr>
              
              </tbody>
      
      </table>
        </div>
    );
};

export default MyTimeTable;