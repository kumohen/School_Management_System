import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {UpdateProfile} from "../../actions/user_action"

const Sprofile = ({user}) => {
    const [image, setImage] = useState("");
    const [url, setUrl] = useState(undefined);

    const dispatch = useDispatch() ;
    
    useEffect(() => {
        if (url) {
          uploadFields();
        }
      });
    
      const uploadPic = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "voting");
        data.append("cloud_name", "dvfpkko1z");
        fetch("https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setUrl(data.url);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const uploadFields = () => {
        dispatch(UpdateProfile(url));
      };

      const PostData = () => {
        if (image) {
          uploadPic();
        } else {
          uploadFields();
        }
      };

    return (
        <div className='card' style={{width:"40%",margin:"auto"}}>
            {user && <>
                <div >
                    <div style={{marginLeft:"34%",marginBottom:"20px"}}>
                    <img src={ user[0].pic} alt="mahen"  style={{height:"200px",width:"200px",borderRadius:"100px"}} />
                    </div>
                   <Link to="/student/dashboard/edit" className='edit_profile'>    <i className="far fa-edit fa-2x"></i> </Link>
               
                    <div style={{ display:"flex" ,marginBottom:"50px",marginLeft:"60px"}}>
                    
                    <div className="file-field input-field">
                    <div
              className="btn #64b5f6 input-field2"
              style={{ marginLeft: "20px" }}
            >
             
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            
                    </div>

          <button className="btn btn-success ml-2  btn_regis " onClick={() => PostData()}>
            Upload Image
          </button>

                    </div>
                   <div style={{display:"flex"}}>
                    <div style={{width:"5%"}}></div>
                       <div style={{width:"50%"}}>
                         <p><b>FullName:</b>{user[0].name}{user[0].surname}</p> 
                          <p><b>Mother Name:</b>{user[0].mother_name}</p>
                          <p><b>Class:</b>{user[0].clsName}</p>
                          <p><b>Date Of Birth:</b>{}</p>
                          <p><b>Email:</b>{user[0].email}</p>
                          <p><b>Gender:</b>{user[0].gender}</p>
                       </div>
                       <div style={{width:"10%"}}>

                       </div>
                       <div>
                        <p><b>Roll No. :</b> {user[0].Roll_No}</p>
                        <p><b>Father Name:</b>{user[0].father_name}</p>
                        <p><b>Admission Year:</b>{user[0].addmision_year}</p>
                        <p><b>Age:</b>{user[0].age}</p>
                        <p><b>Mobile No.</b>{user[0].mobile}</p>
                        <p><b>Address:</b>{user[0].address}</p>
                       </div>
                   </div>
                 
                </div>
            </>}
           
         
        </div>
    );
};

export default Sprofile;