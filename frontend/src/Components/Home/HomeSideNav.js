import React, {Component} from 'react';
import styles from './CSS/home.module.css';
import style from './CSS/TeamModal.module.css';
import ViewArrayIcon from '@material-ui/icons/ViewArray';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TeamModal from  '../../assets/Images/TeamModal.svg';
import {NavLink} from 'react-router-dom';


class HomeSideNav extends Component{



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

        return(
            <>
            <div className={styles.BoardNavMain}>
               

               <div className={styles.BoardNav}>
                
                   <NavLink to='/home' activeClassName={styles.activeClass}><div className={styles.BoardNavIcon}><HomeIcon fontSize="small"/></div>
                            <span className={styles.BoardCategoryName}>Home</span></NavLink>
                
                </div>


                <div className={styles.BoardNav}>
                
                       <div className={styles.BoardNavIcon}> <ViewArrayIcon fontSize="small"/></div>
                        <span className={styles.BoardCategoryName}>Board</span>
                
                </div>

                

                <div className={styles.BoardNav}>
                    
                    <div className={styles.BoardNavIcon}> <ViewArrayIcon fontSize="small"/></div>
                            <span className={styles.BoardCategoryName} >
                            Badminton Game 
                            </span>
                    
                    </div>


            <div className={styles.TeamNavSection}>

                <div className={styles.TeamHeading}>
                    <p>
                    Team</p>

                    <AddIcon  className={styles.add} onClick={this.handleOpen} fontSize="small"/>
                </div>

                <div className={styles.BoardNav}>
               
                <div className={styles.BoardNavIcon}><GroupIcon fontSize="small"/></div>
                    <span className={styles.BoardCategoryName}>Coursera</span>
       
               </div>

                <div className={styles.BoardNav}>
                    
                <div className={styles.BoardNavIcon}><GroupIcon fontSize="small"/></div>
                    <span className={styles.BoardCategoryName}>
                      Badminton Game</span>
            
                </div>


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

                        <div className={style.Heading}>
                            Create your team
                        </div>


                        <div className={style.SubHeading}>
                            Working with team has never been so easy
                        </div>

                    <div className={style.FormGroup}>

                        <div className={style.FormMain}>

                            <div className={style.Form}>

                                    <div className={style.formLabel}>
                                            Team Name
                                    </div>  

                                    <input 
                                    placeholder="Ayush's Flow"
                                    className={style.FormText1}/>
                                    

                            </div>


                            <div className={style.Form}>

                                <div className={style.formLabel}>
                                        Team Description
                                </div>  
                                

                                <textarea

                                rows="5"
                                cols="25"
                                placeholder="We are here to sort your life up"
                                className={style.FormText2}
                                />

                                <p className={style.DescriptionSubtitle}>Tell us something about your team</p>

                            </div>

                            <div className={style.ContinueButton}>
                                Continue
                            </div>
                            


                        </div>


                        <img className={style.TeamImage} src={TeamModal}/>
                    
                    </div>


                        
                    </div>
                </Fade>
                </Modal>
        </>
        );
    }

} 

export default HomeSideNav;