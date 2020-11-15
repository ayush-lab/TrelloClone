import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './CSS/BoardCardList.module.css';
import {AsynAddNewList} from '../../actions';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AddSharpIcon from '@material-ui/icons/AddSharp';
//import AuthService from '../../ApiServices/services';


class BoardAddmore extends Component{

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

    handlerDispatch = ()=> {
       // const {dispatch} =this.props;
        const BoardId =this.props.boardId;
     
        const {text} = this.state;

       
        let formData ={};
        formData['name'] =text;

        if(text){
            this.props.addList(BoardId,formData,text);
        }
    
        

         
    }


    render(){ 
        
        let NewCard =(
        <div onClick= {this.handleOpenForm} className={styles.BoardAddmore}>
   
            <AddSharpIcon />
            <span>Add new list</span>
            
        </div>);


        if(this.state.isFormOpen){
         NewCard = (
            <div>
                <TextareaAutosize autoFocus
                style = {{resize:"none"}} 
                onBlur= {()=> {this.handlerOnBlur()}}
                onChange={(event)=> {this.handlerInput(event)}}
                className={styles.BoardTextarea}/>
     

                <div className={styles.BoardButtonArea}>
                        <Button 
                        variant="contained" 
                        color="primary"
                        onMouseDown={this.handlerDispatch}
                        >Add list
                        </Button>
                        <CloseIcon style={{color:"white"}} onClick={this.handleOpenForm}/>
                </div>
           </div>
        );
      }
      if(!this.state.isFormOpen){

        NewCard =(
            <div onClick= {this.handleOpenForm} className={styles.BoardAddmore}>
                <AddSharpIcon />
                <span>Add new list</span>
            </div>);
      }

        return(

            <>
             {NewCard}
            </>
        );

       
    }

   
}

 const mapDispatchToProps =dispatch => {
  
            return {
                
            addList: (BoardId,formData,text)=> dispatch(AsynAddNewList(BoardId,formData,text))
        
                   }
}

export default connect(null,mapDispatchToProps)(BoardAddmore);
