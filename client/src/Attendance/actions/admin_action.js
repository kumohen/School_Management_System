import axios from "axios"


export const getAllNoticeAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_NOTICE_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/allnotice');
        console.log("reas",response)
        dispatch({
           type:'GET_All_NOTICE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_NOTICE_FAILED',
           payload:error
       })
    }
}

export const addNoticeAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_NOTICE_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addnotice", user);
       
        dispatch({
            type: 'ADD_NOTICE_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_NOTICE_FAILED',
            payload: error
        })
    }
}

export const getAllClubAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_CLUB_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/allclub');
        
        dispatch({
           type:'GET_All_CLUB_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_CLUB_FAILED',
           payload:error
       })
    }
}
export const getClubJoinIssAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_CLUB_ISSUE_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/allissue');
        
        dispatch({
           type:'GET_CLUB_ISSUE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_CLUB_ISSUE_FAILED',
           payload:error
       })
    }
}


export const addClubAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_CLUB_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addclub", user);
       
        dispatch({
            type: 'ADD_CLUB_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_CLUB_FAILED',
            payload: error
        })
    }
}

export const addSubjectAction = (user) => async dispatch => {
    dispatch({
        type: 'ADD_SUBJECT_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/addSub", user);
       
        dispatch({
            type: 'ADD_SUBJECT_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ADD_SUBJECT_FAILED',
            payload: error
        })
    }
}
export const getAllSubAction = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_SUBJECT_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/allSub');
        console.log("reas",response)
        dispatch({
           type:'GET_All_SUBJECT_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_SUBJECT_FAILED',
           payload:error
       })
    }
}


export const acJoinRq = (id) => async dispatch => {
    console.log(id)
    try {
        const res = await axios.post('http://localhost:5000/acjoinclub',{id});
        const response = await axios.get('http://localhost:5000/allissue');
        
        dispatch({
           type:'GET_CLUB_ISSUE_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_CLUB_ISSUE_FAILED',
           payload:error
       })
    }
       
   
}

export const reqToJoinClubAction = (user) => async dispatch => {
    dispatch({
        type: 'JOIN_CLUB_REQUEST'
    })
    console.log(user)
    try {
        const res = await axios.post("http://localhost:5000/joinclub", user);
       
        dispatch({
            type: 'JOIN_CLUB_SUCCESS',
            payload:res.data
        })
        const response = await axios.get('http://localhost:5000/allclub');
        
        dispatch({
           type:'GET_All_CLUB_SUCCESS',
           payload:response.data
       })
    } catch (error) {
        dispatch({
            type: 'JOIN_CLUB_FAILED',
            payload: error
        })
    }
}

export const AcReqToJoinClubAction = (user) => async dispatch => {
    dispatch({
        type: 'ACJOIN_CLUB_REQUEST'
    })

    try {
        const res = await axios.post("http://localhost:5000/acjoinclub", user);
       
        dispatch({
            type: 'ACJOIN_CLUB_SUCCESS',
            payload:res.data
        })
    } catch (error) {
        dispatch({
            type: 'ACJOIN_CLUB_FAILED',
            payload: error
        })
    }
}

export const getAllFaculty = ()=> async dispatch =>{
    dispatch({
        type:'GET_All_FACULTY_REQUEST'
    })
    try {
        const response = await axios.get('http://localhost:5000/getAllFac');
        console.log("reas",response)
        dispatch({
           type:'GET_All_FACULTY_SUCCESS',
           payload:response.data
       })
    } catch (error) {
       dispatch({
           type:'GET_All_FACULTY_FAILED',
           payload:error
       })
    }
}