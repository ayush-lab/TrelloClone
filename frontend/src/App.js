import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Otp from './Components/Authentication/Otp/Otp';
import Signup from './Components/Authentication/Signup/Signup';
import Login from './Components/Authentication/Login/Login';
import ResetPassword from './Components/Authentication/ForgotPassword/ResetPassword';
import ForgotPassword from './Components/Authentication/ForgotPassword/ForgotPassword';
import OtpVerify from './Components/Authentication/ForgotPassword/OtpVerify';
import BoardPage from './Components/BoardPage/BoardPage';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';

function App() {
  return (

<BrowserRouter>
    
    <Switch>

     <Route path="/signup" exact component={Signup}/>
     <Route path="/signup/otp"  component={Otp}/>
     <Route path="/ResetPassword" component={ResetPassword}/>
     <Route path="/ForgotPassword" component={ForgotPassword}/>
     <Route path="/Verifyotp" component={OtpVerify}/>
     <Route path="/Login" exact component={Login}/>

     <Route path='/b/:BoardId/:BoardName'  
     render ={props =><BoardPage key={props.location.pathname} {...props}/>} />

     <Route path='/Homepage' component={LandingPage}/>

     <Route path='/home' component={Home}/>
     <Route path='/team' component={Team}/>


     <Redirect to="/home"/> 


     </Switch>

</BrowserRouter>

  );
}

export default App;
