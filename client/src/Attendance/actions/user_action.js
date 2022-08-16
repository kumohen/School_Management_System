import axios from 'axios';

export const registerUser = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/stuReg", user);
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}
export const registerTeacher = (user) => async dispatch => {
    dispatch({
        type: 'USER_REGISTER_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/teachReg", user);
        console.log(res);
        dispatch({
            type: 'USER_REGISTER_SUCCESS'

        })
    } catch (error) {
        dispatch({
            type: 'USER_REGISTER_FAILED',
            payload: error
        })
    }
}


export const loginUser = (user,type) => async dispatch => {
    dispatch({
        type: 'USER_LOGIN_REQUEST'
    })
   
    try {
        var  res
        if(type == "Student" || type == "Admin") {
             if(type == "Student" && user.email == 'admin@gmail.com'){
                return ;
             }
          res =  await axios.post("http://localhost:5000/StuSign", user);
          console.log(res) 
        } else {
            res = await axios.post("http://localhost:5000/TecSign", user);
        }
        
        
        dispatch({
            type: 'USER_LOGIN_SUCCESS',
            payload: res.data
        })
        console.log(res.data)
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem('currentUser', JSON.stringify(res.data));
        console.log(   type === "Teacher")
        if(type == "Teacher"){
            window.location.href = "/teacher/dashboard";
        } 
        if(type == "Student") {
            window.location.href = "/student/dashboard";
        }
        if(type == "Admin"){
            localStorage.setItem("admin", type);
            window.location.href = "/admin/dashboard";
        }
        
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAILED',
            payload: error
        })
    }
}





export const logoutUser = () => async dispatch => {

    localStorage.removeItem('currentUser');
    window.location.href = "/landing";

}


export const userProfile = (id,type="other") => async (dispatch, getState) => {
    dispatch({
        type: "USER_PROFILE_REQUEST"
    });
    // const config = {
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: "Bearer " + localStorage.getItem("jwt"),
    //     },
    // };

    var user_type ;

    if(type == "Teacher"){
        user_type = "tprofile"
    }else{
        user_type = "profile"
    }

    console.log(id)

    try {
        const response = await axios.post(`http://localhost:5000/${user_type}`,{id});
        console.log(response);
        dispatch({
            type: "USER_PROFILE_SUCCESS",
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: "USER_PROFILE_FAILED",
            payload: error,
        });
    }

};



export const removeAStudent = (postId)=> async dispatch =>{

   
 
    try {
         await axios.post('/api/users/removeStudent',{postId});
        const response2 = await axios.get(`/api/users/allStudent`);
       
        dispatch({
            type:'GET_STUDENTS_SUCCESS',
            payload:response2.data
        })
      } catch (error) {
        console.log(error);
      }
  
    
}

export const UpdateTProfile = (pic)=> async dispatch =>{

   
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      };


    console.log(pic)
    try {
        //  await axios.post('/api/users/removeStudent',{postId});
        // const response2 = await axios.get(`/api/users/allStudent`);
       const res = await axios.put(`http://localhost:5000/tupdatepic`, { pic }, config);
       console.log(res)
        //   console.log(response)
        dispatch({
            type:'GET_TEACHER_SUCCESS', 
          
        })
        window.location.href = "/teacher/dashboard";
      } catch (error) {
        console.log(error);
      }
  
    
}

export const UpdateProfile = (pic)=> async dispatch =>{

   
    const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      };


    console.log(pic)
    try {
        //  await axios.post('/api/users/removeStudent',{postId});
        // const response2 = await axios.get(`/api/users/allStudent`);
       const res = await axios.put(`http://localhost:5000/updatepic`, { pic }, config);
       console.log(res)
        //   console.log(response)
        dispatch({
            type:'GET_STUDENTS_SUCCEssllslSS', 
          
        })
        window.location.href = "/student/dashboard";
      } catch (error) {
        console.log(error);
      }
  
    
}