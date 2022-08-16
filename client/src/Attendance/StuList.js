import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {useSelector,useDispatch} from "react-redux"
import {Button,Modal} from "react-bootstrap"
import {makeStuAttendance,getStudentByClass,uploadStuMark} from "./actions/student_action"
const StuList = ({students,sClass,mark}) => {

    const[currentDate,setCurrentDate]=useState("")
    //const[userItem,setUserItem]=useState("mahen")
    const[uName,setuName]=useState("")
    const [show, setShow] = useState(false);
    const[id,setId] = useState("");
    const[sem,setSem] = useState("")
    const[subject,setSubject] = useState("")
    const[smark,setMark] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (item) =>{
    setShow(true)
    setId(item._id)
    setuName(item.name)
  };

    const dispatch=useDispatch()
 
    console.log(id)

   const exTractNumber = (str)=> {
    return str.replace(/[^0-9]/g, '');
}

const handleRequest = ()=> {
    const obj = {
        id,sem,smark,subject
    }
    var another = {
        clsName: sClass
    }
   dispatch(uploadStuMark(another,obj))
   dispatch(getStudentByClass(another));
   setShow(false)
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
        clsName: sClass
    }
        dispatch(makeStuAttendance(another,Obj))
        dispatch(getStudentByClass(another));
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(Obj)
        // };
        // const response = await fetch('http://localhost:5000/makeAttdence', requestOptions);
        // const data = await response.json();
        // setUserItem(data);
        //setCount(count+1)
    }

    return (
        <div>
             <table className='table table-bordered table-responsive-sm' style={{width:"80%",margin:"auto"}}>
        <thead style={{fontSize:"22px"}}>
          <tr>
              <th >Name</th>
              <th>Roll_No</th>
              <th>Addmision year</th>
              <th>Attendance</th>
          </tr>
        </thead>

        {
           students && students.students && students.students.map(item => (
                <tbody key={item.name} style={{padding:"5px"}}>
                <tr style={{height:"50px"}}>
                   <td>{item.name}</td>
                
                  <td>
                      {item.Roll_No}
                  </td>
                  <td >
                        {item.addmision_year}
                  </td>
                  {

                    mark ? <>
                        <button className='btn btn-primaty mark_button' onClick={() => handleShow(item)}>
       Upload Mark
      </button>
                    </> : <>
                    <td>
                     
                     {item && item.pList && item.pList.includes(currentDate) ?<>
                         {item.attdenList.filter(ele=>  ele.dateId === currentDate ) ? <>
   
                            <p>{item.attdenList[0].type}</p>
                         </>:<><p>okkk</p></>}
                     
                     </>
                        
                     :<>
                        
                     <button className='btn btn-success' onClick={()=>makeAttendance(item,"present")}>Present</button> {" "}
                     <button className='btn btn-danger' onClick={()=>makeAttendance(item,"absent")}>Absent</button>
                     </>}
                     </td>
                    </>

                  }

                
                </tr>
              
              </tbody>
            ))
        }
      </table>
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload {uName}'s Mark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
            <div className="col">
            <input
            type="number"
            placeholder="Semester"
            value={sem}
           className='form-control mod_input_class'
            onChange={(e)=>setSem(e.target.value)}
            />
            </div>
          
          </div>
          <br />
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="Subject Name"
            value={subject}
           className='form-control mod_input_class'
            onChange={(e)=>setSubject(e.target.value)}
            />
            </div>
          
          </div>
          <br />
          <div className="row">
            <div className="col">
            <input
            type="number"
            placeholder="mark"
            value={smark}
           className='form-control mod_input_class'
            onChange={(e)=>setMark(e.target.value)}
            />
            </div>
          
          </div>

          <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Submit</button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
        </>
        </div>
    );
};

export default StuList;