import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {getAllFaculty} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"

const Allfaculty = () => {
    const dispatch = useDispatch() ;
    useEffect(()=>{
         dispatch(getAllFaculty())
    },[])
    const data =useSelector(state=>state.getAllFacReducer)
    
    return (
        <div>
             
            <Titleheading title="View All Faculty Member" />
            <table  className='table table-bordered table-responsive-sm' style={{width:"90%",border:"2px solid black",margin:"auto"}}>
        <thead style={{fontSize:"22px"}} className='thead-dark'>
          <tr>
              <th >Name</th>
              <th>Employee Id </th>
              <th>Joining Year</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>DateOfBirth</th>
              <th>Age</th>
              <th>Image</th>
              <th>Action</th>
          </tr>
        </thead>

           {data && data.allFaculty && data.allFaculty.map(user =>(
            
                    <tbody key={user.name} style={{padding:"5px"}}>
                <tr >
                   <td>{user.name}{" "}{user.surname}</td>
                
                  <td>
                  {user.empolyee_id}
                  </td>
                  <td >
                  {user.joining_year}
                  </td>
                  <td>{user.gender}</td>
                  <td>
                     
                     {user.mobile}
                  </td>
                  <td>{user.date_of_birth}</td>
                  <td>{user.age}</td>
                  <td><img src={user.pic} alt="sksk" style={{height:"50px",width:"50px"}} /></td>
                  <td>

                    <button className='btn btn-danger'>Delete</button>
                  </td>
                </tr>
              
              </tbody>
      
           ))}
           
          
      </table>
        </div>
    );
};

export default Allfaculty;