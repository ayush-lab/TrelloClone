import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './CSS/BoardCardList.module.css';
import {addList} from '../../actions';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import AddSharpIcon from '@material-ui/icons/AddSharp';

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
        const {dispatch} =this.props;
 
     
        const {text} = this.state;

        if(text){
            dispatch(addList(text));
     
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
export default connect()(BoardAddmore);
