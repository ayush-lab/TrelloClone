import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Droppable} from 'react-beautiful-dnd';
import {AsynAddNewCard,AsynEditListName} from '../../actions';
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

    handleSumbitHeading = (event)=> {
        if(event.key ==="Enter"){
            let formData ={};
            formData['name']=this.state.heading.text;
            console.log(formData);
            this.props.editListName(this.props.List_id,formData,this.state.heading.text)}
    }


    handlerInput = (event)=> {
        this.setState({text:event.target.value})
    }
   
    handlerOnBlur = ()=> {
        this.setState({isFormOpen: !this.state.isFormOpen})
    }

    handlerDispatch = ()=> {
        const CardId=this.props.List_id;
        console.log(CardId);
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
                    onKeyDown={this.handleSumbitHeading}
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
           
           cardRender = cardList.map((item,index) =>
             
            (<BoardList 
            key={item.id}
            index={index}
            CardId={item.id} 
            ListId={this.props.List_id}
            heading={item.name}
            subHeading={this.props.title}
            description={item.desc}
            dueDate={item.due_date}
            />));
          
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
                    placeholder={"Add a new card .."}
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
            <Droppable droppableId={String(this.props.List_id)}>
                {
                    provided=>(
            <div {...provided.droppableProps} ref={provided.innerRef} className={styles.Card}>
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
                    {provided.placeholder}
                </div>
                    )}
            
            </Droppable>

        );
    }

}
const mapStateToProps = state => ({
    LISTS:state.lists,
    board:state.board,
})

const mapDispatchToProps =dispatch => {
  
    return {
        
    addCard: (ListId,formData,text)=> 
    dispatch(AsynAddNewCard(ListId,formData,text)),

    editListName: (ListId,formData,text)=>
    dispatch(AsynEditListName(ListId,formData,text)),

           }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardCard);
