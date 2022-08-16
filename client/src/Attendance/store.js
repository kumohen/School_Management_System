import { combineReducers } from 'redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {getStuByClassReducer,getAllStuReducer,addReportReducer,getAllRepReducer} from "./reducers/student_reducer"
import { userRegisterReducer, userLoginReducer,userProfileReducer } from "./reducers/user_reducer"
import {addNoticeReducer,getAllNoticeReducer,addSubjectReducer,getAllSubReducer,getAllClubReducer,addClubReducer,getAllFacReducer,getAllIssueReducer} from "./reducers/admin_reducers"


const  rootReducer = combineReducers({
    getStuByClassReducer,getAllStuReducer,addReportReducer,getAllRepReducer,
    userRegisterReducer, userLoginReducer,userProfileReducer,
    addNoticeReducer,getAllNoticeReducer,addSubjectReducer,getAllSubReducer,
    getAllClubReducer,addClubReducer,getAllFacReducer,getAllIssueReducer
})


const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {

    userLoginReducer: { currentUser }
}
const composedEnhancers = composeWithDevTools({})

const store = createStore(rootReducer, initialState, composedEnhancers(applyMiddleware(thunk)))

export default store;