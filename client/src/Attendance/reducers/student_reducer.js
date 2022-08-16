

export const getStuByClassReducer = (state={students:[]},action)=>{
    switch(action.type){
        case 'GET_STUDENTS_REQUEST':
            return {...state,loading:true}
        case 'GET_STUDENTS_SUCCESS':
            return {
                students:action.payload,loading:false
            }    
        case 'GET_STUDENTS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const getAllStuReducer = (state={allstudents:[]},action)=>{
    switch(action.type){
        case 'GET_All_STUDENTS_REQUEST':
            return {...state,loading:true}
        case 'GET_All_STUDENTS_SUCCESS':
            return {
                allstudents:action.payload,loading:false
            }    
        case 'GET_All_STUDENTS_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}

export const addReportReducer = (state={reports:[]},action)=>{
    switch(action.type){
        case 'ADD_REPORT_REQUEST':
            return {...state , loading:true}    
        case 'ADD_REPORT_SUCCESS':
            return {...state,
                reports:[...state.reports ,action.payload ],
                loading:false
            }
       
           
       
        default:
            return state         
    }
}

export const getAllRepReducer = (state={allreport:[]},action)=>{
    switch(action.type){
        case 'GET_All_REPORT_REQUEST':
            return {...state,loading:true}
        case 'GET_All_REPORT_SUCCESS':
            return {
                allreport:action.payload,loading:false
            }    
        case 'GET_All_REPORT_FAILED':
            return {error:action.payload,loading:false}
        default:
            return state         
    }
}
