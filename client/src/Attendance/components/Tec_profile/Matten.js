import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getStudentByClass} from "../../actions/student_action"
import StuList from "../../StuList"

const Matten = (props) => {
    const [sClass,setSClass] = useState("")
    const dispatch=useDispatch()

    useEffect(()=>{
        if(localStorage.getItem("currentUser" == undefined)){
           
        }
        if(props){
            var obj = {
                clsName: props.match.params.id
            }
            setSClass(props.match.params.id);
            dispatch(getStudentByClass(obj));
        }

    },[props.match.params.id])

    const students=useSelector(state=>state.getStuByClassReducer)

  
    return (
        <div>
             <br />
            <div style={{width:"80%",margin:"auto"}}>
            <h3 style={{ textAlign:"center" }}> Upload The Mark of Student </h3>
            </div>
            <br />
            
             {students &&  <StuList sClass={sClass} students={students} mark={true}  /> }
        </div>
    );
};

export default Matten;