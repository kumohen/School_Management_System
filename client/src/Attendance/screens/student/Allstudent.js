import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllStudent} from "../../actions/student_action"
import Titleheading from "../../components/Titleheading"

const Allstudent = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
         dispatch(getAllStudent())
    },[])
    const data =useSelector(state=>state.getAllStuReducer)

    const Datafilter = data && data.allstudents && data.allstudents.filter(item => item.name != "Admin")

     console.log(Datafilter)
   var  min = Math.ceil(1);
   var  max = Math.floor(12);



    return (
        <div>
             
            <Titleheading title="View All Student" />
            <table  className='table table-bordered table-responsive-sm' style={{width:"90%",border:"2px solid black",margin:"auto"}}>
        <thead style={{fontSize:"22px"}} className='thead-dark'>
          <tr>
              <th >Name</th>
       
              <th>class </th>
              <th>Roll No</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>AdmissionYear</th>
               <th>Image</th>
               <th>Action</th>
          </tr>
        </thead>

           {Datafilter && Datafilter.map(user =>(
            
                    <tbody key={user.name} style={{padding:"5px"}}>
                <tr >
                   <td>{user.name}</td>
                
                
                  <td>
                  {user.clsName}
                  </td>
                  <td >
                  {user.Roll_No}
                  </td>
                  <td>
                     
                     {user.mobile}
                  </td>
                  <td>{user.gender}</td>
                  <td>{user.addmision_year}</td>
                  <td><img src={user.pic} alt="sksk" style={{height:"50px",width:"50px"}} /></td>
                  <td>
                    <button className='btn btn-success'>Edit</button>{" "}
                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              
              </tbody>
      
           ))}
           
          
      </table>
        </div>
    );
};

export default Allstudent;