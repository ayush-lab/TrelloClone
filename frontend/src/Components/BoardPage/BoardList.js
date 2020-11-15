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

class BoardList extends Component{



    state = {
        open:false,
    }

    handleOpen = () => {
        this.setState({open:true})
        
    };

    handleClose = () => {
        this.setState({open:false})
       
    };


    render(){

        const options = [
            'one', 'two', 'three'
          ];
          const defaultOption = options[0];

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
                            <Button variant="outlined" className={style.buttonFeatures}>Attachment</Button>
                            <Dropdown
                                      options={options}
                                      onChange={this._onSelect} 
                                      value={"More"} 
                                      className={style.buttonFeatures_dropdown}
                                      placeholder="Select an option" />   


                        </div>

                        <div className={style.mainHeadingTitle}>
                            <InsertEmoticonIcon/>
                            <div className={style.MainHeading}>Main description</div>
                        </div>
                        <div className={style.SubHeading}>Sub Heading about the main card</div>

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
                                <p> Description  <span> Edit </span> </p>
                                
                            </div>

                            <p className={style.desciptionText}>this is a dummy description, it is about the baord</p>
                            
                            <div className={style.descriptionEdit}>
                                <TextareaAutosize autoFocus
                                        style = {{resize:"none"}} 
                                        // onBlur= {()=> {this.handlerOnBlur()}}
                                        // onChange={(event)=> {this.handlerInput(event)}}
                                        className={style.Textarea}/>

                                <div className={styles.ButtonArea}>
                                    <Button 
                                    variant="contained" 
                                    className={style.saveButton}
                                    onMouseDown={this.handlerDispatch}
                                    >Save
                                    </Button>
                                    <CloseIcon onClick={this.handleOpenForm}/>
                                </div>

                            </div>
         
                        </div>

                        <div className={style.Description}> 
                            <div className={style.DescriptionTitle}>
                                <div><PlaylistAddCheckIcon/></div>
                                <p> Checklist <span> Edit </span> </p>
                           
                            </div>

                        <div className={style.checklist}>
                            <div className={style.checklist_text}>
                                <div><CheckBoxOutlineBlankIcon/></div>
                                <p>Maths assigment due at this time</p>
                            </div>

                            

                            <FormControlLabel
                                className={style.checklist_list}
                                control={<Checkbox checked={true}
                                name="checkedG" />}
                                label="SI meeting at 5"/>

                        </div>

                        <div className={style.DeleteSection}>
                            <Button 
                            className={style.deleteButton}>Delete
                            </Button>
                        </div>
                        
                        
                        </div>


                    </div>
                </Fade>
            </Modal>

            </div>

        );
    }

}
export default BoardList;
