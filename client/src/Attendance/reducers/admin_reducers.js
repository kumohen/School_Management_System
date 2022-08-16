export const addNoticeReducer = (state={notices:[]},action)=>{
    switch(action.type){
        case 'ADD_NOTICE_REQUEST':
            return {...state , loading:true}    
        case 'ADD_NOTICE_SUCCESS':
            return {...state,
                notices:[...state.notices ,action.payload ],
                loading:false
            }
       
           
       
        default:
            return state         
    }
}
export const getAllNoticeReducer = (state={allnotices:[]},action)=>{
    switch(action.type){
        case 'GET_All_NOTICE_REQUEST':
            return {...state,loading:true}
        case 'GET_All_NOTICE_SUCCESS':
            return {
                allnotices:action.payload,loading:false
            }    
        case 'GET_All_NOTICE_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}
export const getAllClubReducer = (state={allClub:[]},action)=>{
    switch(action.type){
        case 'GET_All_CLUB_REQUEST':
            return {...state,loading:true}
        case 'GET_All_CLUB_SUCCESS':
            return {
                allClub:action.payload,loading:false
            }    
        case 'GET_All_CLUB_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getAllIssueReducer = (state={Issues:[]},action)=>{
    switch(action.type){
        case 'GET_CLUB_ISSUE_REQUEST':
            return {...state,loading:true}
        case 'GET_CLUB_ISSUE_SUCCESS':
            return {
                Issues:action.payload,loading:false
            }    
        case 'GET_CLUB_ISSUE_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}


export const addClubReducer = (state={clubs:[]},action)=>{
    switch(action.type){
        case 'ADD_CLUB_REQUEST':
            return {...state , loading:true}    
        case 'ADD_CLUB_SUCCESS':
            return {...state,
                clubs:[...state.notices ,action.payload ],
                loading:false
            }
       
           
       
        default:
            return state         
    }
}

export const getAllFacReducer = (state={allFaculty:[]},action)=>{
    switch(action.type){
        case 'GET_All_FACULTY_REQUEST':
            return {...state,loading:true}
        case 'GET_All_FACULTY_SUCCESS':
            return {
                allFaculty:action.payload,loading:false
            }    
        case 'GET_All_FACULTY_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const addSubjectReducer = (state={subjects:[]},action)=>{
    switch(action.type){
        case 'ADD_SUBJECT_REQUEST':
            return {...state , loading:true}    
        case 'ADD_SUBJECT_SUCCESS':
            return {...state,
                subjects:[...state.subjects ,action.payload ],
                loading:false
            }
       
           
       
        default:
            return state         
    }
}

export const getAllSubReducer = (state={allSubject:[]},action)=>{
    switch(action.type){
        case 'GET_All_SUBJECT_REQUEST':
            return {...state,loading:true}
        case 'GET_All_SUBJECT_SUCCESS':
            return {
                allSubject:action.payload,loading:false
            }    
        case 'GET_All_SUBJECT_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}
