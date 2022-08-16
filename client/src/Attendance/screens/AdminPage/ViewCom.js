import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllRportAction} from "../../actions/student_action"
import Titleheading from "../../components/Titleheading"

const ViewNotice = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllRportAction())
    },[])

    const {allreport} = useSelector(state => state.getAllRepReducer) ;

    
  
    return (
        <div style={{width:"80%",margin:"auto"}}>
             <div >
             <Titleheading title="All Complain" />
             </div>
        
            {allreport && allreport.posts && allreport.posts.map(item =>(
                <div key={item._id} className="card" style={{marginBottom:"20px"}}>
                    <h4>{item.title}</h4>
                    <p style={{fontSize:"20px"}}> Complained By: <b>{item.postedBy.name} {item.postedBy.surname}</b> || {item.createdAt.substr(0,10)} </p>
                   
                    <p style={{fontSize:"20px",textAlign:"justify",padding:"10px"}}>{item.body}</p>
                </div>
            )) }
        </div>
    );
};

export default ViewNotice;