import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './BoardNav.css';


const boardNav = (props)=> {

    return(

  <nav  className="  navbar navbar-board navbarBoard navbar-expand-lg sticky-top " >

    <NavLink to="/home/all" className="navbar-brand-board">Title of the project</NavLink>

    <button className="navbar-toggler" type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fa fa-bars bar-nav" aria-hidden="true"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav mr-auto">
            
            <li className="nav-item ">
                <NavLink to="/Cart" className="nav-link star-board-nav"> 
                <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
                className="fa fa-star star-icon-nav" aria-hidden="true"></i></NavLink>
                
            </li>
                
            <li className="nav-item">
                <NavLink to="/Cart" className="nav-link team-board-visibility-nav"> 
                <i data-toggle="tooltip" data-placement="top" title="Bookmarked Courses"
                className="fa fa-users users-nav" aria-hidden="true"></i>
                <span className="users-visibility-nav">Team visibility</span></NavLink>
                
            </li>
        
        </ul>

        <li className="nav-item">
            <i className="fa fa-bars bar-nav " aria-hidden="true"></i>
            <span className="more-option-nav"> More options</span>
         
        </li>
 
    </div>
</nav>
    )}

export default boardNav;