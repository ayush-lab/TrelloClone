import React, {Component} from 'react';
import './Navbar.css';
import {NavLink,Redirect} from 'react-router-dom';
//import { Avatar } from 'antd';

//import Loggo from '../../../UI/Logo/Logo';
//import AuthServices from '../../../../ApiServices/auth.service';

class Navbar extends Component {
    
    state = {
        isLoggedIn:false,
        userName:"Profile",
        redirect:null,
    }

    // componentDidMount(){
    //     let userToken = AuthServices.getCurrentUser();
    //     let userName= AuthServices.getUserName();
    //     if(userToken!==null){
    //         this.setState({isLoggedIn:true,userName:userName});
         
    //     }

    
        
    //  }

    //  logout=() => {
    //    this.setState({redirect:"/login"})
    //     AuthServices.logout();


    // }



    render(){


       if (this.state.redirect) {
            return <Redirect to="/login" />
        }

      
        let LoginLinks = ( <ul className="navbar-nav ml-auto">


      


        <li className="nav-item">
         
        <p className="avatar-nav">A</p>
        
         
        </li>
      </ul>
      );

      if(localStorage.getItem('user') === null){

        LoginLinks =( <ul className="navbar-nav ml-auto">

               

                <li className="nav-item">
                
                <NavLink to="/signup" activeClassName="btnactive" className="nav-link Signupbtn">Signup</NavLink>
                
                </li>
            
                <li className="nav-item">
                <NavLink to="/login" activeClassName="btnactive" className="nav-link Loginbtn">Login</NavLink>
                
                </li>

                
               
      </ul>
        )}

       
    return(
  

  <nav className=" navbar navbar-expand-lg sticky-top ">

  <NavLink to="/home/all" className="navbar-brand">Flow</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation">
  <i className="fa fa-bars" aria-hidden="true"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav mr-auto">
         
    <li className="nav-item ">
          <NavLink to="/Cart" className="nav-link home"> 
          <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
           className="fa fa-home" aria-hidden="true"></i></NavLink>
         
    </li>
          
    <li className="nav-item">
          <NavLink to="/Cart" className="nav-link board"> 
          <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
           className="fa fa-dashcube" aria-hidden="true"></i><span className="board-icon-text">Boards</span></NavLink>
         
    </li>
    
    </ul>
  

    {LoginLinks}
    
  </div>
</nav>

)}
};

export default Navbar;