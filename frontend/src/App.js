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
     <Route path='/boardpage'  component={BoardPage}/>
    
     <Route path='/Homepage' component={LandingPage}/>

     <Redirect to="/Homepage"/> 


     </Switch>

</BrowserRouter>

  );
}

export default App;
