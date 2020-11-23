import React, {Component} from 'react';
import styles from './CSS/TeamHome.module.css';
import style from './CSS/CreateBoard.module.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AuthService from '../../ApiServices/services'
import {Redirect} from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';


class AddTeam extends Component{


    state = {
        open:false,
        Form:{
                name:{value:""},
                desc:{value:""},
                team:{value:""},
            },
        redirect:null,
     
    }

    handleOpen = () => {
        this.setState({open:true})
        
    };

    handleClose = () => {
        this.setState({open:false})
       
    };

    inputchangeHandler = (event,inputIdentifier)=> {

        const updatedForm = {
            ...this.state.Form
        }
        const updatedElement = {...updatedForm[inputIdentifier]}
     
        updatedElement.value= event.target.value;
    
        
        updatedForm[inputIdentifier] = updatedElement;
        this.setState({Form: updatedForm});
    
    }


    CreateBoard=()=> {

        let formData = {};

        formData['name']=this.state.Form.name.value;
        formData['desc']=this.state.Form.desc.value;
    

        AuthService.CreateBoard(formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
           //  this.setState({loading:false})    
             this.setState({redirect:`/b/${response.data.id}/${response.data.name}`})
   
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }  

    CreateBoardTeam=()=> {

        let formData = {};

        formData['name']=this.state.Form.name.value;
        formData['desc']=this.state.Form.desc.value;
        formData['team']=this.props.TeamId;
        

        AuthService.CreateBoard(formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
           //  this.setState({loading:false})    
             this.setState({redirect:`/b/${response.data.id}/${response.data.name}`})
   
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }  




    render(){
        if(this.state.redirect!==null){
            return <Redirect to={this.state.redirect} />;
        }


        let team =null;

        if(this.props.TeamId){
            
            team =<div onClick={this.CreateBoardTeam} className={style.ContinueButton}>
                                Continue
             </div>
        }

        else {
            team= <div onClick={this.CreateBoard} className={style.ContinueButton}>
                                Continue
            </div>
        }
        return(
            <>
               
                <div onClick={this.handleOpen} className={styles.boardsCardSection}>
                   
                   <p className={styles.boardTitle}>
                     <AddIcon  className={styles.add} onClick={this.handleOpen} 
                     fontSize="small"/>Create new Board</p>        
                   
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

                    <div className={style.Heading}>
                            Create your board
                        </div>


                       

                            <div className={style.Form}>

                                    <div className={style.formLabel}>
                                            Board name
                                    </div>  

                                    <input 
                                    placeholder="Flow .."
                                    onChange={(event)=> this.inputchangeHandler(event,'name')}
                                    className={style.FormText1}/>
                                    

                            </div>


                            <div className={style.Form}>

                                <div className={style.formLabel}>
                                        Board Description
                                </div>  
                                

                                <textarea

                                rows="5"
                                cols="25"
                                placeholder="This board will be about making trello clone"
                                onChange={(event)=> this.inputchangeHandler(event,'desc')}
                                className={style.FormText2}
                                />

                                <p className={style.DescriptionSubtitle}>Tell us something about your team</p>

                            </div>

                           {team}
                            

                    
                    

                        
                    </div>
                </Fade>
                </Modal>

            </>
        );
    }

} 

export default AddTeam;