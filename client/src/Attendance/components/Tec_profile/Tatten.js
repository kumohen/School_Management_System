import React from 'react';
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import {Button,Modal} from "react-bootstrap"
import { useDispatch, useSelector } from 'react-redux'
import {getStudentByClass,makeStuAttendance} from "../../actions/student_action"

const Tatten = (props) => {
    const[currentDate,setCurrentDate]=useState("")
    //const[userItem,setUserItem]=useState("mahen")
    const [show, setShow] = useState(false);
    const[id,setId] = useState("");
    const[sem,setSem] = useState("")
    const[subject,setSubject] = useState("")
    const[smark,setMark] = useState("")

    const history = useHistory()
    const dispatch=useDispatch()
    useEffect(()=>{
        var obj = {
            clsName: props.match.params.id
        }
        dispatch(getStudentByClass(obj));
    },[props.match.params.id])
    const students=useSelector(state=>state.getStuByClassReducer)
     console.log(students)

    
 
   const handleClose = () => setShow(false);
   const handleShow = (item) =>{
     setShow(true)
     setId(item._id)
   };
 
  
  
   
 
 const exTractNumber = (str)=> {
     return str.replace(/[^0-9]/g, '');
 }
 
 const handleRequest = ()=> {
     const obj = {
         id,sem,smark,subject
     }
     var another = {
         clsName: props.match.params.id
     }
    // dispatch(uploadStuMark(another,obj))
    dispatch(getStudentByClass(another));
 }
 
  var ans,curDate;
 
 
  const newFun =  async ()=>{
   const formatted = moment(Date.now()).format('L');
   
   curDate = await exTractNumber(formatted);
   setCurrentDate(curDate)
  }
 
  newFun();
 
  
 
     const makeAttendance = async (student,value) => {
        let currentTimestamp = Date.now()
        
         const formatted = moment(currentTimestamp).format('L');
 
          ans = await exTractNumber(formatted);
         const Obj ={
           timestamp:currentTimestamp,
          
           type:value,
           StudentId:student._id,
           dateId:ans
      }
      
      var another = {
         clsName: props.match.params.id
     }
         dispatch(makeStuAttendance(another,Obj))
         dispatch(getStudentByClass(another));
       
     }
 
    return (
        <div>
             <br />
            <div style={{width:"80%",margin:"auto"}}>
            <h3 style={{ textAlign:"center" }}>Make Attendance at {new Date().toISOString().slice(0, 10)}</h3>
            </div>
            <br />
           
        <table className='table table-bordered table-responsive-sm' style={{width:"80%",margin:"auto"}}>
   <thead style={{fontSize:"22px"}}>
     <tr>
         <th >Name</th>
         <th>Roll_No</th>
         <th>className</th>
         <th>Attendance</th>
     </tr>
   </thead>

  
   {
      students && students.students && students.students.map(item => (
           <tbody key={item.name} style={{padding:"5px"}}>
           <tr >
              <td>{item.name}</td>
           
             <td>
                 {item.Roll_No}
             </td>
             <td style={{fontSize:"19px",fontWeight:"700"}}>
                   {item.clsName}
             </td>
          
               <td>
                
                {item && item.pList && item.pList.includes(currentDate) ?<>
                    {item.attdenList.filter(ele=>  ele.dateId === currentDate ) ? <>

                       <p>{item.attdenList[item.attdenList.length-1].type}</p>
                    </>:<><p>okkk</p></>}
                
                </>
                   
                :<>
                    {/* <i className="fas fa-user-times"
                onClick={()=>makeAttendance(item,"present")}
                ></i>
                <i className="fad fa-user-minus" onClick={()=>makeAttendance(item,"absent")}>

                </i> */}

                     <button className='btn btn-success' onClick={()=>makeAttendance(item,"present")}>Present</button> {" "}
                     <button className='btn btn-danger' onClick={()=>makeAttendance(item,"absent")}>Absent</button>
                </>}
                </td>
           
           </tr>
         
         </tbody>
       ))
   }
 </table>

   </div>
    );
};

export default Tatten;