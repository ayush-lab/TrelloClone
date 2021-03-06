import React, {Component} from 'react';
import {connect} from 'react-redux';
import {AsynAddNewCard,AsynAddDescription,AsynEditCardName,AsynEditCardDueDate} from '../../actions';
import styles from './CSS/BoardCardList.module.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import style from './CSS/Modal.module.css';
import Button from '@material-ui/core/Button';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import SubjectIcon from '@material-ui/icons/Subject';
import TextareaAutosize from 'react-textarea-autosize';
import CloseIcon from '@material-ui/icons/Close';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import 'react-dropdown/style.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LinearDeterminate from './ProgressBar';
import Checklist from './Checklist';
import SimpleMenu from './Menu';
import {Draggable} from 'react-beautiful-dnd';
import TransitionsModal from './Modal';

class BoardList extends Component{

    


    state = {
        open:false,
        descriptionForm:{
            open:false,
            text:"",
        },
        headingForm:{
            open:false,
            text:"",
        },

        Checklist:{
            open:false,

        },

        dueDate:{
            open:false,
            text:'',

        },

        Label:{
            open:false,

        },

        

    }

    handleOpen = () => {
        this.setState({open:true})
        
    };

    handleClose = () => {
        this.setState({open:false})
       
    };

    handleOpenForm =(type)=> {
        let dummyForm = {...this.state[type]};
        dummyForm.open =!dummyForm.open;
        this.setState({[type]: dummyForm})
        
    }

    handlerInput = (event,type)=> {
        let dummyInput = {...this.state[type]};
        dummyInput.text =event.target.value;
        this.setState({[type]: dummyInput})
        
    }
  
    handlerChecklist = ()=> {
        let dummyChecklist = {...this.state.Checklist};
        dummyChecklist.open = !dummyChecklist.open;
        this.setState({Checklist:dummyChecklist});
    }

    handlerDueDate = ()=> {
        let dummyDueDate = {...this.state.dueDate};
        dummyDueDate.open = !dummyDueDate.open;
        this.setState({dueDate:dummyDueDate});
    }

    handlerLabel = ()=> {
        let dummyLabel = {...this.state.Label};
        dummyLabel.open = !dummyLabel.open;
        this.setState({Label:dummyLabel});
    }

    handlerDispatch=(type)=> {
        const text = this.state[type].text;
        const ListId=this.props.ListId;
        const CardId=this.props.CardId;
        let formData ={};
        
        

        if(text && type ==="descriptionForm"){
            formData['desc'] =text;
            this.props.addDescription(ListId,CardId,formData,text);
            console.log(text,CardId)
        }

        if(text && type ==="headingForm"){
            formData['name'] =text
            this.props.editCardName(ListId,CardId,formData,text);
            console.log(text,CardId)
        }
    }

    dueDate = (e)=>{
        let dueDateValue = e.target.value;
        let a = new Date()

        let formData = {};
        formData['due_date']=dueDateValue + "T"+ a.getHours()+':'+a.getMinutes()+':'+a.getSeconds()+"+"+'05:30';
        this.props.editCardDueDate(this.props.ListId,this.props.CardId,formData,formData['dueDate']);
        console.log(formData['due_date'])
    }


    render(){

        
        let {Members} =this.props;
       // console.log(Members)

        let Heading = null;
        let Description = null;
        let desContent=" Add a description here";
        let dueDate=null;
        let members = null;


        if(Members){
        if(Members.Boards.members!==[]){
            members = (
                <div className={style.Features}>
                                    <div className={style.members}>
                                        <p>Members</p>
                                        <AvatarGroup max={4}>
                                        {
                                          Members.Boards.members.map((
                                              avatar,index)=> (<Avatar key={index} alt={avatar}>{avatar[0].toUpperCase()}</Avatar>)
                                          )
                                        }
                                     
                                        </AvatarGroup>

                                        <Avatar className={style.addmoreButton}>+</Avatar>
                                    </div>
                                </div>
            )
        }}

        if(this.props.description!==null)
            desContent=this.props.description;
        
        if(this.props.dueDate){
            let a=this.props.dueDate;
            a = a.split('T')[0];
            dueDate=a;
        }


        if(!this.state.descriptionForm.open ){

            Description =  <p  onClick= {()=>this.handleOpenForm('descriptionForm')} 
                               className={style.desciptionText}>
            {desContent}</p>;
        
        }

        else{
            Description = (
                <div className={style.descriptionEdit}>
                <TextareaAutosize autoFocus
                        style = {{resize:"none"}} 
                        onBlur= {()=> {this.handleOpenForm("descriptionForm")}}
                        onChange={(event,text)=> {this.handlerInput(event,"descriptionForm")}}
                        placeholder={desContent}
                        className={style.Textarea}/>

                <div className={styles.ButtonArea}>
                    <Button 
                    variant="contained" 
                    className={style.saveButton}
                    onMouseDown={()=>this.handlerDispatch("descriptionForm")}
                    >Save
                    </Button>
                    <CloseIcon onClick={()=>this.handleOpenForm("descriptionForm")}/>
                </div>

            </div>
            );
        }

        

        if(!this.state.headingForm.open){

            Heading = (<div 
                onClick= {()=>this.handleOpenForm('headingForm')} 
                className={style.MainHeading}>{this.props.heading}</div>);
        
        }

        else{
            Heading = (
                <div className={style.HeadingEdit}>
                <TextareaAutosize autoFocus
                        style = {{resize:"none"}} 
                        onBlur= {()=> {this.handleOpenForm('headingForm')}}
                        onChange={(event,text)=> {this.handlerInput(event,'headingForm')}}
                        className={style.Textarea}/>

                <div className={styles.ButtonArea}>
                    <Button 
                    variant="contained" 
                    className={style.saveButton}
                    onMouseDown={()=>this.handlerDispatch("headingForm")}
                    >Save
                    </Button>
                    <CloseIcon onClick={()=>this.handleOpenForm('headingForm')}/>
                </div>

            </div>
            );

        }
        
        
        return(
        <Draggable draggableId={String(this.props.CardId)} index={this.props.index}>
            {provided=>(
                    <div ref={provided.innerRef} 
                    {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div onClick={this.handleOpen}  className={styles.CardList}>

                        <div className={styles.CardLabel}>

                            <div className={styles.CardListColor}>
                                
                            </div>

                            <div className={styles.CardListColor}>
                                
                            </div>



                        </div>

                        <div className={styles.ListTitle}>
                            {this.props.heading}
                        </div>

                        <div className={styles.List_Details_Indicator}>
                            <EditTwoToneIcon style={{fontSize:'medium'}}  />
                        </div>
                    </div>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            open={this.state.open}
                            className={style.modal}
                            onClose={this.handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                        }}
                    >
                        <Fade in={this.state.open}>
                            <div className={style.paper}>
                                <div className={style.groupFeatures}>
                                    <TransitionsModal button={"card"} cardId={this.props.CardId}/>
                                    
                                    <Button variant="outlined" onClick={this. handlerLabel} className={style.buttonFeatures}>Label</Button>
                                    <Button variant="outlined" onClick={this.handlerDueDate}  className={style.buttonFeatures}>Due Date</Button>
                                    <Button variant="outlined" onClick={this.handlerChecklist} className={style.buttonFeatures}>Checklist</Button>
                                    <SimpleMenu cardId={this.props.CardId} Menu={"More"} option1={"Archive card"} option2={"Something"} option3={"Somehting"} />


                                </div>

                                <div className={style.mainHeadingTitle}>
                                    <InsertEmoticonIcon/>
                                    {Heading}
                                </div>
                                <div className={style.SubHeading}>{this.props.subHeading}</div>

                                {members}

                                {this.state.Label.open? (<div className={style.Features}>
                                    <div className={style.label}>
                                        <p>Labels</p>
                                        
                                        <div className={style.labelColor}>
                                            Red
                                        </div>

                                        <div className={style.labelColor}>
                                            Blue
                                        </div>

                                        <Avatar className={style.addmoreButton}>+</Avatar>
                                    </div>
                                </div>) :null}

                                {this.state.dueDate.open? (
                                
                                <div className={style.Features}>
                                    <div className={style.dueDate}>
                                        <p>Due Date</p>
                                        
                                        <div className={style.labelColor}>
                                            
                                        <input type="date" value={dueDate} onChange={(event)=>this.dueDate(event)}/>
                                       
                                        </div>

                                    
                                    </div>
                                </div>) : null} 

                                <div className={style.Description}> 
                                    <div className={style.DescriptionTitle}>
                                        <div ><SubjectIcon/></div>
                                        <p> Description 
                                        <span onClick= {()=>this.handleOpenForm('descriptionForm')}> 
                                        Edit </span> </p>
                                        
                                    </div>

                                    {Description}
                                    
                                

                                </div>
                            
                                {this.state.Checklist.open ? ( <div className={style.Description}> 
                                    <div className={style.DescriptionTitle}>
                                        <div><PlaylistAddCheckIcon/></div>
                                        <p> Checklist <span> Delete </span> </p>
                                
                                    </div>
                                    
                                    <div className={style.progressbarSection}>
                                    
                                        <LinearDeterminate className={style.progressBar} progress={50}/>

                                    </div>
                                    <Checklist/>
                                </div>) : null}

                                    




                                <div className={style.DeleteSection}>
                                    <Button 
                                    className={style.deleteButton}>Delete
                                    </Button>
                                </div>
                                
                                
                            


                            </div>
                        </Fade>
                    </Modal>

                    </div>
            )}
         

          </Draggable>

        );
    }

}

const mapStateToProps = state => ({
    LISTS:state.lists,
    Members:state.Members,
})

const mapDispatchToProps =dispatch => {
  
    return {
        
    addCard: (CardId,formData,text)=> 
    dispatch(AsynAddNewCard(CardId,formData,text)),

    addDescription:(ListId,CardId,formData,text)=>
    dispatch(AsynAddDescription(ListId,CardId,formData,text)),

    editCardName: (ListId,CardId,formData,text)=>
    dispatch(AsynEditCardName(ListId,CardId,formData,text)),

    editCardDueDate: (ListId,CardId,formData,text)=>
    dispatch(AsynEditCardDueDate(ListId,CardId,formData,text)),

    
           }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardList);
