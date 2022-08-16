import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useWindowDimensions from '../../components/UseWindowDimensions';
import {addNoticeAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"
const AddNotice = () => {

    const dispatch = useDispatch();

    const { height, width } = useWindowDimensions();
   
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")

    const handleRequest= ()=>{
        const data = {title,content}

        dispatch(addNoticeAction(data))          


    }

    return (
        <div className='col-7' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
          <Titleheading title="Add Notice" />
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="title"
            value={title}
           className='form-control'
            onChange={(e)=>setTitle(e.target.value)}
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
           
             <textarea class="form-control" id="exampleFormControlTextarea1"  placeholder="Write The content"
            value={content}
            onChange={(e)=>setContent(e.target.value)} rows="3" />
            </div>
              </div>
          <br />
          
         
       

           <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Submit</button>
      </div>
      </div>
    );
};

export default AddNotice;