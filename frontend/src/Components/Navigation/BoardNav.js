import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './BoardNav.module.css';

const boardNav = (props)=> {

    return(

  <nav className=" navbar navbarBoard navbar-expand-lg sticky-top " className={styles.navbarBoard }>

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
 
    </div>
</nav>
    )}

export default boardNav;