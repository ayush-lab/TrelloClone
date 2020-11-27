import React, {Component} from 'react';
import './Navbar.css';
import {NavLink,Redirect,Link} from 'react-router-dom';
import { Avatar } from '@material-ui/core';

class Navbar extends Component {
    
    state = {
        isLoggedIn:false,
        userName:localStorage.getItem('userName'),
        redirect:null,
    }


     logout=() => {
       this.setState({redirect:"/login"})
       localStorage.clear();
    }

    avatar=()=>{
      this.setState({redirect:`user/${localStorage.getItem('userId')}/`})
    }


     render(){

      let LoginLinks,firstLetter;

      if(this.state.userName){
         
         firstLetter = this.state.userName;
      }
    
      else firstLetter = 'A';

       if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
      

       LoginLinks = ( <ul className="navbar-nav ml-auto">
  
        <li className="nav-item">
        
      
       <Avatar onClick={this.avatar} className="avatar">{firstLetter[0].toUpperCase()}</Avatar>
        
        
        </li>

        <li className="nav-item">
                
            <NavLink to="/login" onClick={this.logout} activeClassName="btnactive"
             className="nav-link home Signupbtn logout">Logout</NavLink>
                
        </li>
    </ul>

    ); 

  


      if(localStorage.getItem('access') === null){

        LoginLinks =( <ul className="navbar-nav ml-auto">

               

                <li className="nav-item">
                
                <NavLink to="/signup" activeClassName="btnactive" className="nav-link home Signupbtn">Signup</NavLink>
                
                </li>
            
                <li className="nav-item">
                <NavLink to="/login" activeClassName="btnactive" className="nav-link  home Loginbtn">Login</NavLink>
                
                </li>

                
               
      </ul>
        )}


        
                  
      

       
    return(
  

  <nav className=" navbar navbar-expand-lg sticky-top ">

  <NavLink to="/home" className="navbar-brand">Flow</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
   aria-expanded="false"
   aria-label="Toggle navigation">
  <i className="fa fa-bars bar-nav" aria-hidden="true"></i>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav mr-auto">
         
    <li className="nav-item ">
          <NavLink to="/home" className="nav-link home"> 
          <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
           className="fa fa-home" aria-hidden="true"></i></NavLink>
         
    </li>
          
    <li className="nav-item">
          <NavLink to="/boardPage" className="nav-link board"> 
         <i  
           className="fa fa-dashcube" aria-hidden="true"></i>
           <span className="board-icon-text">Boards</span></NavLink>
         
    </li>
    
    </ul>
  

    {LoginLinks}
    
  </div>
</nav>

)}
};

export default Navbar;