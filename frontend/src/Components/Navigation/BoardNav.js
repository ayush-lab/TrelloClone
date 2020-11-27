import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './BoardNav.css';
import TextareaAutosize from 'react-textarea-autosize';
import {AsynStarringBoard} from '../../actions';
import {connect} from 'react-redux';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import Visibility from './visibility';
import BoardMembers from './Boardmembers';
import  TransitionsModal  from '../BoardPage/Modal';

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
                //dispatch(addTitle(text));
        
            }

            
    }}

    star=()=>{
        this.props.StarringBoard(this.props.boardId);
    }

    render(){

        let {Home} = this.props;
        let star =false;

        if(Home){
        Home.Boards.personal_boards.map((
            board,index)=> { 
                if(board.id == this.props.boardId) 
                    { star=board.starred; console.log(board.id)}}
        )}

        console.log("star Status:",star,this.props.boardId)

        let NewCard = (<p  onClick= {this.handleOpenForm} className="navbar-brand-board">
                           {this.props.title}</p>);

       
        
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
        data-target="#navbarSupportedContentSub" aria-controls="navbarSupportedContentSub"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <i className="fa fa-bars bar-nav-sub" aria-hidden="true"></i>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContentSub">

        <ul className="navbar-nav mr-auto">
            
            <li className="nav-item ">
                <div onClick={this.star}className="nav-link star-board-nav"> 
                   {star?(<StarBorderRoundedIcon
                    className="fa fa-star star-icon-nav star"  />)
                    :(<StarBorderRoundedIcon
                    className="fa fa-star star-icon-nav" />)}
                </div>
                
            </li>
                
            <li className="nav-item">

                <Visibility boardId={this.props.boardId}/>
                
            </li>
        
        <li className="nav-item">
            <BoardMembers BoardId={this.props.boardId}/>
        </li>

        <li className="nav-item invite">
            <TransitionsModal button={"board"} BoardId={this.props.boardId}/>
                
            </li>
        
        </ul>

        <li className="nav-item">
            
            <TransitionsModal button={"archive"}/>
         
        </li>
 
    </div>
</nav>
    )}}

    const mapStateToProps = state => ({
    Home:state.Home,
        
    })

    const mapDispatchToProps =dispatch => {
    
    return {
       StarringBoard: (id)=> dispatch(AsynStarringBoard(id)),
           }


    } 


export default connect(mapStateToProps,mapDispatchToProps)(BoardNav);