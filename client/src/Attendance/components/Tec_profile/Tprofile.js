import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {UpdateTProfile} from "../../actions/user_action"

const Tprofile = ({user}) => {

    console.log(user)
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
        dispatch(UpdateTProfile(url));
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
                   
                    <Link to={`/teacher/dashboard/edit/${user[0]._id}`} className='edit_profile'>    <i className="far fa-edit fa-2x"></i> </Link>
               
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
                        
                          <p><b>Teaching Area:</b>{user[0].teaching_area}</p>
                          <p><b>Date Of Birth:{user[0].date_of_birth}</b>{}</p>
                          <p><b>Email:</b>{user[0].email}</p>
                          <p><b>Gender:</b>{user[0].gender}</p>
                          <p><b>Qualification:</b>{user[0].qulification}</p>
                       </div>
                       <div style={{width:"10%"}}>

                       </div>
                       <div>
                        <p><b>Employee Id :</b> {user[0].empolyee_id}</p>
                    
                        <p><b>Joining Year:</b>{user[0].joining_year}</p>
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

export default Tprofile;