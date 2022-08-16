import React from 'react';
import { Link } from "react-router-dom"
import StudentIMage from "../Images/student4.jpg"
import AdminIMage from "../Images/admin2.jpg"
import TeacherImage from "../Images/backgg.JPG"
import backg from "../Images/backg.jpg"

const Landing = () => {
    return (
        <div className="HomePage" style={{ backgroundImage:`url(${backg})`,
        backgroundRepeat:"no", height:"880px",paddingTop:"100px" }} >
           <div style={{height:"400px",margin:"auto",backgroundColor:"white",width:"60%",opacity:"0.9",paddingTop:"50px"}}>

         
            <div className=" m-auto" style={{display:"flex",width:"100%",height:"300px",justifyContent:"center" }}>
                <div className="card" >
                   <img src={AdminIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                   
                   <Link className="link_class" to="/adminlogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3>Signin as  Admin</h3></Link>
                </div>
         
                <div className="card" style={{marginLeft:"30px"}}>
                   <img src={StudentIMage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
               
                   <Link className="link_class" to="/stulogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3 >Signin as  Student</h3></Link>  
                </div>
                
                <div className="card" style={{marginLeft:"30px"}}>
                   <img src={TeacherImage} alt="StudentIMage" style={{height:"250px",width:"250px"}} />
                  
                   <Link className="link_class" to="/teclogin" style={{textDecoration:"none",fontFamily:"Oswald",color:"black",textAlign:"center"}}> <h3 >Signin as  Teacher</h3></Link>  
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Landing;