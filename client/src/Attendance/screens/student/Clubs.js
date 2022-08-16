import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {getAllClubAction,reqToJoinClubAction} from "../../actions/admin_action"
import Titleheading from "../../components/Titleheading"


const Clubs = () => {
    const [ CuserId,setcuserId] = React.useState("")
    const[show,setShow]= useState(false)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem("currentUser")){
            const userId = JSON.parse(localStorage.getItem("currentUser")).user._id ;
            setcuserId(userId)
        }

        dispatch(getAllClubAction())
    },[show])

    const {allClub} = useSelector(state => state.getAllClubReducer)
    console.log(allClub)
    const {currentUser} = useSelector(state => state.userProfileReducer) ;
    var userId;
   const sendReqToJoinClub = (clubId,clubName)=>{
      userId = currentUser[0]._id ;
     const userName = currentUser[0].name ;
     const userClass = currentUser[0].clsName ;

      const data = {userId,cuser:currentUser[0], clubId,clubName}
      dispatch(reqToJoinClubAction(data))
      dispatch(getAllClubAction())
      setShow(!show)
   }
   

    return (
        <div>
            
            <Titleheading title="Choose Your Club for joining" />
            {allClub && allClub.map(user => (
                <div key={user._id} style={{width:"60%",margin:"auto"}}>
                    <div style={{border:"1px solid black",marginBottom:"10px",padding:"10px" }}>
                    <h3>{user.name}</h3>
                     <p style={{  }}>{user.description}</p>
                      {/* {user.members && user.members.length < 1 ?<>
                      <button className='btn btn-success '  onClick={()=> sendReqToJoinClub(user._id,user.name)}>Send Req</button></> :<>
                            {user.members.map(item => item == CuserId ?<>
                                <button  className='btn btn-danger'>Already Send</button>
                            </> :<><button className='btn btn-success' onClick={()=> sendReqToJoinClub(user._id,user.name)}>Send Req</button></> )}
                      </>} */}
                        
                       {  user.members && user.members.includes(CuserId) ? <> <button  className='btn btn-danger'>Already Send</button></> : 
                       
                       <> <button className='btn btn-success' onClick={()=> sendReqToJoinClub(user._id,user.name)}>Send Req</button>  </> }


                    </div>
                   

                  


                    
                    
                </div>
            ))}
        </div>
    );
};

export default Clubs;