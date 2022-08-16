import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import useWindowDimensions from '../../components/UseWindowDimensions';
import {addSubjectAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"
import {CName,Credit_Data} from "../../Utills"

const AddSubject = () => {

    const dispatch = useDispatch();

    const { height, width } = useWindowDimensions();
   
     const[sName,setsName]=useState("")
     const[sCode,setsCode]=useState("")
     const[sClass,setsClass]=useState("")
     const[sCredit,setsCredit]=useState("")
     const[selectedOption,setSelectedOption] = useState("")

    const handleRequest= ()=>{
        const data = {sub_name:sName,sub_code:sCode,sub_class:sClass,
            sub_credit:sCredit,sub_type:selectedOption}

            dispatch(addSubjectAction(data))


    }

    return (
        <div className='col-7' style={{margin:'auto'}}>
          <div className="card px-5 py-2" style={{margin:"5%"}}>
          <Titleheading title="Add New Subject" />
         
          <div className="row">
            <div className="col">
            <input
            type="text"
            placeholder="Subject Name"
            value={sName}
           className='form-control stregis_incls'
            onChange={(e)=>setsName(e.target.value)}
            />
            </div>
          
          </div>
          <br />
              <div className="row">
              <div className="col">
              <input
            type="text"
            placeholder="Subject Code"
            value={sCode}
           className='form-control stregis_incls'
            onChange={(e)=>setsCode(e.target.value)}
            />
            
            </div>
              </div>
          <br />
          <div className="row">
            <div className="col" style={{display:"flex",}}>
            <p style={{ marginRight:"10px",fontSize:"20px" }}>Class:</p>
                 <select value={sClass} id="selectId"  onChange={e => setsClass(e.target.value)}>
                 
                 {CName.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
                 </select>
            </div>
             
            <div className="col" style={{display:"flex"}}>
            <p style={{ marginRight:"10px",fontSize:"20px" }}>Subject Credit:</p>
                 <select value={sCredit} id="selectId"  onChange={e => setsCredit(e.target.value)}>
                 
                 {Credit_Data.map((item) => (
                  <option value={item} key={item}>
                    {" "}
                    {item}{" "}
                  </option>
                ))}
                 </select>
            </div>
          
          </div>
          <br />
             
          <div className="row">
          <div className="col" style={{ display:"flex" }}>
           <div className="radio" >
          <label>
            <input
              type="radio"
              value="Theoretical"
              checked={selectedOption === "Theoretical"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Theoretical
          </label>
        </div>
        <div className="radio" style={{ marginLeft:"15px" }}>
          <label>
            <input
              type="radio"
              value="Practical"
              checked={selectedOption === "Practical"}
              onChange={(e)=> setSelectedOption(e.target.value)}
            />
            Practical
          </label>
        </div>
        
           </div>
            </div>
          <br />
          
         
       

           <button className='btn btn-success mb-4 mt-2' onClick={() => handleRequest()}>Submit</button>
      </div>
      </div>
    );
};

export default AddSubject;