import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './BoardNav.css';
import TextareaAutosize from 'react-textarea-autosize';
import {addTitle} from '../../actions';
import {connect} from 'react-redux';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

class BoardNav extends Component{

    state = {
        isFormOpen:false,
        text: "",
    }

    handleOpenForm =()=> {
        this.setState({isFormOpen: !this.state.isFormOpen})
    }

    handlerInput = (event)=> {
        this.setState({text:event.target.value})
    }
   
    handlerOnBlur = ()=> {
        this.setState({isFormOpen: !this.state.isFormOpen})
    }

    handlerDispatch = (e)=> {

        if(e.key === 'Enter'){

            const {dispatch} =this.props;
          
            const {text} = this.state;

            if(text){
                dispatch(addTitle(text));
        
            }

            

    }}

    render(){


        let NewCard = (<p  onClick= {this.handleOpenForm} className="navbar-brand-board">{this.props.title}</p>);

       
        
        if(this.state.isFormOpen){

            NewCard = (
                <div>
                    <TextareaAutosize autoFocus
                    style = {{resize:"none"}} 
                    onKeyDown={(event)=> this.handlerDispatch(event)}
                    onBlur= {()=> {this.handlerOnBlur()}}
                    onChange={(event)=> {this.handlerInput(event)}}
                    />
         
               </div>
            );
        };


        if(!this.state.isFormOpen){
            NewCard = (<p onClick= {this.handleOpenForm}
                 className="navbar-brand-board">{this.props.title}</p>);
        }




    return(

  <nav  className="  navbar navbar-board navbarBoard navbar-expand-lg sticky-top " >

    {NewCard}

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
                <StarBorderRoundedIcon
                className="fa fa-star star-icon-nav" /></NavLink>
                
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
    )}}

export default connect()(BoardNav);