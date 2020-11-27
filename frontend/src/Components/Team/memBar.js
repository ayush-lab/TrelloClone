import React, {useState} from 'react';
import styles from './CSS/Members.module.css';
import profilePic from '../../assets/Images/TeamProfile.png';
import {connect} from 'react-redux';
import {AsynRemoveMemberTeam} from '../../actions';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MemBar(props) {


    const [open, setOpen] = useState(true);
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

      const RemoveMember =(memberId)=>{
       console.log('memberId=',memberId, " ","TeamId=",props.teamId); 
       let formData = {};
       formData['user']=memberId;    
       props.removeMember(props.teamId,formData);
       setOpen(true);
    }





    return(
        <div >
            <div className={styles.memBar}>

                <div className={styles.memBarRow}>
                    <img src={profilePic} alt={"ptofile picture"}/>
                    <div className={styles.Name}>
                        <p className={styles.UserName}>{props.Name}</p>
                        <p className={styles.NameId}>@{props.id}</p>
                    </div>
                </div>

                <button onClick={(id)=>RemoveMember(props.id)}>Remove</button>
            
            </div>
            <hr className="mt-3 mb-3"/>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                    {
                   
                    <Alert onClose={handleCloseAlert} severity="success">
                        Member Removed successfully!
                    </Alert>
                    
                    }
                    
                </Snackbar>
        </div>
    );

 
}


const mapStateToProps = state => ({
    LISTS:state.lists,
})

const mapDispatchToProps =dispatch => {
  
    return {
        removeMember: (id,formData)=> dispatch(AsynRemoveMemberTeam(id,formData)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MemBar);  
