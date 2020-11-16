import React, {Component} from 'react';
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
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LinearDeterminate from './ProgressBar';
import Checklist from './Checklist';
import SimpleMenu from './Menu';



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

        }
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
        let dummyInput = {...this.state.descriptionForm};
        dummyInput.text =event.target.value;
        this.setState({descriptionForm: dummyInput})
        
    }
  
    handlerChecklist = ()=> {
        let dummyChecklist = {...this.state.Checklist};
        dummyChecklist.open = !dummyChecklist.open;
        this.setState({Checklist:dummyChecklist});
    }


    render(){

        const options = [
            'one', 'two', 'three'
          ];
          const defaultOption = options[0];

        let Heading = null;
        let Description = null;

        if(!this.state.descriptionForm.open){

            Description =  <p  onClick= {()=>this.handleOpenForm('descriptionForm')} 
                               className={style.desciptionText}>
            this is a dummy description, it is about the baord</p>;
        
        }

        else{
            Description = (
                <div className={style.descriptionEdit}>
                <TextareaAutosize autoFocus
                        style = {{resize:"none"}} 
                        onBlur= {()=> {this.handleOpenForm("descriptionForm")}}
                        onChange={(event,text)=> {this.handlerInput(event,"descriptionForm")}}
                        className={style.Textarea}/>

                <div className={styles.ButtonArea}>
                    <Button 
                    variant="contained" 
                    className={style.saveButton}
                    onMouseDown={this.handlerDispatch}
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
                    onMouseDown={this.handlerDispatch}
                    >Save
                    </Button>
                    <CloseIcon onClick={()=>this.handleOpenForm('headingForm')}/>
                </div>

            </div>
            );
        }


        
        return(

            <div  className={styles.CardList}>

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
                    <EditTwoToneIcon style={{fontSize:'medium'}} onClick={this.handleOpen} />
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
                            <Button variant="outlined" className={style.buttonFeatures}>Members</Button>
                            <Button variant="outlined" className={style.buttonFeatures}>Label</Button>
                            <Button variant="outlined" className={style.buttonFeatures}>Due Date</Button>
                            <Button variant="outlined" onClick={this.handlerChecklist} className={style.buttonFeatures}>Checklist</Button>
                            <SimpleMenu  Menu={"More"} option1={"Attachment"} option2={"Something"} option3={"Somehting"} />


                        </div>

                        <div className={style.mainHeadingTitle}>
                            <InsertEmoticonIcon/>
                            {Heading}
                        </div>
                        <div className={style.SubHeading}>{this.props.subHeading}</div>

                        <div className={style.Features}>
                            <div className={style.members}>
                                <p>Members</p>
                                <AvatarGroup max={4}>
                                    <Avatar alt="Remy Sharp" />
                                    <Avatar alt="Travis Howard" />
                                    <Avatar alt="Cindy Baker"  />
                                    <Avatar alt="Agnes Walker"  />
                                    <Avatar alt="Trevor Henderson"/>
                            
                                </AvatarGroup>

                                <Avatar className={style.addmoreButton}>+</Avatar>
                            </div>
                        </div>

                        <div className={style.Features}>
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
                        </div>

                        <div className={style.Features}>
                            <div className={style.dueDate}>
                                <p>Due Date</p>
                               
                               <div className={style.labelColor}>
                                  <input type="date" />
                               </div>

                         
                            </div>
                        </div>

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

        );
    }

}
export default BoardList;
