import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllNoticeAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"

const ViewNotice = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllNoticeAction())
    },[])

    const {allnotices} = useSelector(state => state.getAllNoticeReducer) ;
  
    return (
        <div style={{width:"80%",margin:"auto"}}>
             <div >
             <Titleheading title="All Notices" />
             </div>
        
            {allnotices && allnotices.posts && allnotices.posts.map(item =>(
                <div key={item._id} className="card" style={{marginBottom:"20px"}}>
                    <h4>{item.title}</h4>
                    <p style={{fontSize:"20px",textAlign:"justify",padding:"10px"}}>{item.content}</p>
                </div>
            )) }
        </div>
    );
};

export default ViewNotice;