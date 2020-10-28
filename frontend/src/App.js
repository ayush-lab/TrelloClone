import React, {Component} from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Signup from './Components/Authentication/Signup/Signup';
import Login from './Components/Authentication/Login/Login';
import BoardPage from './Components/BoardPage/BoardPage';
import SideNav from './Components/Navigation/SideNav';
import LandingPage from './Components/LandingPage/LandingPage';


function App() {
  return (

<BrowserRouter>
    
    <Switch>

     <Route path="/signup" exact component={Signup}/>
     <Route path="/Login" exact component={Login}/>
     <Route path='/boardpage'  component={BoardPage}/>
     <Route path='/SideNav' component={SideNav}/>
     <Route path='/Homepage' component={LandingPage}/>

     <Redirect to="/Homepage"/> 


     </Switch>

</BrowserRouter>

  );
}

export default App;
