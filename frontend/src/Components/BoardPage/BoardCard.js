import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './CSS/BoardCardList.module.css';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import BoardList from './BoardList';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import {addCard} from '../../actions';

class BoardCard extends Component{

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
        const CardId=this.props.id;
     
        const {text} = this.state;

        if(text){
            dispatch(addCard(text,CardId));
            console.log(CardId);
        }

    }

    render(){
      
        let cardList = this.props.cardList;

        let NewCard = (<div onClick= {this.handleOpenForm} className={styles.CardAddCard}>
            <AddSharpIcon />
             <span className={styles.NewText}>New</span>
             </div>);

       
        
        if(this.state.isFormOpen){

            NewCard = (
                <div>
                    <TextareaAutosize autoFocus
                    style = {{resize:"none"}} 
                    onBlur= {()=> {this.handlerOnBlur()}}
                    onChange={(event)=> {this.handlerInput(event)}}
                    className={styles.Textarea}/>
         
    
                    <div className={styles.ButtonArea}>
                            <Button 
                            variant="contained" 
                            color="primary"
                            onMouseDown={this.handlerDispatch}
                            >Add card
                            </Button>
                            <CloseIcon onClick={this.handleOpenForm}/>
                    </div>
               </div>
            );
        };


        if(!this.state.isFormOpen){
            NewCard = (<div onClick= {this.handleOpenForm} className={styles.CardAddCard}>
                          <AddSharpIcon />
                              <span className={styles.NewText}>New</span>
                       </div>
              );
        }



        return(
            <div className={styles.Card}>
                <div className={styles.CardHeader}>
                    
                    <div className={styles.CardTitleInput}>
                         <p className={styles.List_Title}>{this.props.title}</p>
                    </div>
                   
                    <div className={styles.CardHeaderMenu}>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>

                </div>

           
                {cardList.map(item => <BoardList key={item.id} heading={item.text}/>)}
                   
                  
          
                <div className={styles.CardFooter}>
                    {NewCard}
                </div>


                


            </div>

        );
    }

}
export default connect()(BoardCard);
