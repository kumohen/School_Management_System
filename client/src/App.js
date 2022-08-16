import React,{useEffect,createContext,useReducer,useContext} from 'react';

import Landing from "./Attendance/screens/Landing"
 import NavBar from './Attendance/Navbar'
// import NavBar from './Attendance/Navbar';
import "./App.css"
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
// import Home from './components/screens/Home'
//  import Signin from './components/screens/SignIn'
import Signin from "./Attendance/screens/Signin"
// import Profile from './components/screens/Profile'
import Profile from "./Attendance/screens/Profile"
// import Signup from './components/screens/Signup2'
//import SignUp from './Attendance/screens/Signup';
import SignUp from "./Attendance/screens/Auth/Signup"
import TeacherSignUp from "./Attendance/screens/Auth/Tecah_regis"
//import CreatePost from './components/screens/CreatePost';
import AttenHome from "./Attendance/Home"
import AdminDashboard from "./Attendance/screens/Admin_dash"




const Routing = ()=>{
  const history = useHistory()

  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("currentUser"))
    console.log("user",user)
    if(user){
      // dispatch({type:"USER",payload:user})
    }else{
      history.push('/landing')
    }
  },[])
  return(
    <Switch>
      <Route exact path="/" >
      <Landing />
      </Route>
      <Route exact path="/landing" >
      <Landing />
      </Route>
      <Route path="/adminlogin">
        <Signin />
      </Route>
      <Route path="/stulogin">
        <Signin />
      </Route>
      <Route path="/teclogin">
        <Signin />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/Tsignup">
        <TeacherSignUp />
      </Route>
      <Route path="/student/dashboard">
        <Profile />
      </Route>
      <Route path="/teacher/dashboard">
        <AttenHome />
      </Route>
      <Route path="/admin/dashboard">
        <AdminDashboard />
      </Route>
      {/* <Route path="/result">
        <CreatePost/>
      </Route> */}
    </Switch>
  )
}

function App() {

  return (
  
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
   
  );
}

export default App;