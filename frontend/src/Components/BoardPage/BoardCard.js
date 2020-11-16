import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsynAddNewCard} from '../../actions';
import styles from './CSS/BoardCardList.module.css';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import BoardList from './BoardList';
import CloseIcon from '@material-ui/icons/Close';
import {AsynAddNewList} from '../../actions';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';

class BoardCard extends Component{

    state = {
        isFormOpen:false,
        text: "",
        heading:{
            open:false,
            text:'',
        }
    }

    handleOpenForm =()=> {
        this.setState({isFormOpen: !this.state.isFormOpen})
    }

    handleOpenHeading =()=> {
        let Dummyheading = {...this.state.heading};
        Dummyheading.open= !this.state.heading.open;
        this.setState({heading:  Dummyheading});
        console.log(this.state.heading.open)
    }

    handleInputHeading =(event)=> {
        let input = {...this.state.heading};
        input.text= event.target.value;
        this.setState({heading:input});
    }


    handlerInput = (event)=> {
        this.setState({text:event.target.value})
    }
   
    handlerOnBlur = ()=> {
        this.setState({isFormOpen: !this.state.isFormOpen})
    }

    handlerDispatch = ()=> {
        const CardId=this.props.id;
        const {text} = this.state;

        let formData ={};
        formData['name'] =text;

        if(text){
            this.props.addCard(CardId,formData,text);
        }
        

    }

    

    render(){
      
        let cardList=this.props.cardList;
        let cardRender=null;
        let cardtitle=null;

        if(this.state.heading.open){
            cardtitle = (
                <div>
                    <TextareaAutosize autoFocus
                    style = {{resize:"none"}} 
                    onBlur= {this.handleOpenHeading}
                    onChange={(event)=> {this.handleInputHeading(event)}}
                    placeholder={this.props.title}
                    className={styles.TextHeading}/>
         
    
                    
               </div>
            );
        }

        else if(!this.state.heading.open){
            cardtitle =  <p onClick={this.handleOpenHeading} 
            className={styles.List_Title}>{this.props.title}</p>;
        }
       
        if(cardList!==null){
           
           cardRender = cardList.map(item =>
             
            (<BoardList 
            key={item.id} 
            CardId={this.props.id}
            heading={item.name}
            subHeading={this.props.title}/>));
          
        }

       

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
                        {cardtitle}
                    </div>
                   
                    <div className={styles.CardHeaderMenu}>
                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>

                </div>
            <div className={styles.List}>
                <div >
          
                    {cardRender }
                </div>   
                  
          
                <div className={styles.CardFooter}>
                    {NewCard}
                </div>
            </div>

                


            </div>

        );
    }

}
const mapStateToProps = state => ({
    LISTS:state.lists,
    board:state.board,
})

const mapDispatchToProps =dispatch => {
  
    return {
        
    addCard: (CardId,formData,text)=> 
    dispatch(AsynAddNewCard(CardId,formData,text))

           }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardCard);
