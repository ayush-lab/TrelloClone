import React, {Component} from 'react';
import styles from './CSS/home.module.css';
import style from './CSS/TeamModal.module.css';
import {connect} from 'react-redux';
import {AsynCreateTeam,AsynViewTeam} from '../../actions'
import ViewArrayIcon from '@material-ui/icons/ViewArray';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TeamModal from  '../../assets/Images/TeamModal.svg';
import {NavLink,Redirect} from 'react-router-dom';
import ListTeam from './ListTeam';

class HomeSideNav extends Component{



    state = {
        open:false,
        name:"",
        desc:'',
    }

    handleOpen = () => {
        this.setState({open:true})
        
    };

    handleClose = () => {
        this.setState({open:false})
       
    };

     inputchangeHandler = (event,inputIdentifier)=> {

        
        let text= event.target.value;
    

        this.setState({[inputIdentifier]: text});
    
    }

    sumbitTeam=()=>{
        let formData ={};
        formData['name']=this.state.name;
        formData['desc']=this.state.desc;
        this.props.CreateTeam(formData);
        
    }

    componentDidMount(){
        this.props.ViewTeam();
    }


    render(){
        
        let {Team} = this.props;
        let TeamList =null;
        console.log("TEAM",Team)
        if(Team!==null){
            if(Team.redirect){
                return <Redirect to={Team.redirect} />
            }
        }
       
        if(Team!==null){
             console.log(Team.Team)
            TeamList = (
                Team.Team.map(item=>{
                    
                    return(
                    <NavLink style={{ textDecoration: 'none' }} exact to={`/team/${item.id}/`}>
                        <ListTeam name={item.name} key={item.id} id={item.id}/>
                    </NavLink>
                 ) })
            )
        }


        return(
            <>
            <div className={styles.BoardNavMain}>
               
           
               <div className={styles.BoardNav}>
                
                       <div className={styles.BoardNavIcon}>
                            <HomeIcon className={styles.NavIcons} fontSize="small"/>
                      </div>
                            <span className={styles.BoardCategoryName}>Home</span>
                   
                     
                </div>
            

                <div className={styles.BoardNav}>
                
                       <div className={styles.BoardNavIcon}> 
                            <ViewArrayIcon className={styles.NavIcons} fontSize="small"/>
                       </div>
                        <span className={styles.BoardCategoryName}>Board</span>
                
                </div>

                

                <div className={styles.BoardNav}>
                    
                    <div className={styles.BoardNavIcon}> <ViewArrayIcon className={styles.NavIcons} fontSize="small"/></div>
                            <span className={styles.BoardCategoryName} >
                            Template
                            </span>
                    
                    </div>


            <div className={styles.TeamNavSection}>

                <div className={styles.TeamHeading}>
                    <p>
                    Team</p>

                    <AddIcon  className={styles.add} onClick={this.handleOpen} fontSize="small"/>
                </div>

                {TeamList}


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
                                    onChange={(event)=> this.inputchangeHandler(event,'name')}
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
                                onChange={(event)=> this.inputchangeHandler(event,'desc')}
                                className={style.FormText2}
                                />

                                <p className={style.DescriptionSubtitle}>Tell us something about your team</p>

                            </div>

                            <div onClick={this.sumbitTeam}className={style.ContinueButton}>
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
const mapStateToProps = state => ({
    Team:state.Team,
    
})

const mapDispatchToProps =dispatch => {
  
    return {
       CreateTeam: (data)=> dispatch(AsynCreateTeam(data)),
       ViewTeam: (data)=> dispatch(AsynViewTeam()),
           }
        
        
        

    } 

export default connect(mapStateToProps,mapDispatchToProps)(HomeSideNav);
