import React, {useState} from 'react';
import styles from './visibility.module.css';
import profilePic from '../../assets/Images/TeamProfile.png';
import {connect} from 'react-redux';
import {AsynRemoveMemberList} from '../../actions';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function ListMembers(props) {


    const [open, setOpen] = React.useState(false);
    const [adminCheck,setAdmin]=React.useState(false);

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const RemoveMember =(memberId)=>{
       console.log('memberId=',memberId, " ","boardId=",props.BoardId); 
       let formData = {};
       formData['member']=memberId;    
       props.addMember(props.BoardId,formData);
       if(memberId==props.admin){
           setAdmin(true)
           setOpen(true)
       }

       if(memberId!==props.admin){
        setAdmin(false)
        setOpen(true)
       }

       
        
    }

    let {LISTS} =props;
    
    let members = <p> </p>; 
        
     if(LISTS){
        if(LISTS.list.lists.members!==[]){
           
            members = (
                           
                                LISTS.list.members.map(
                                avatar=> (<div className={styles.memBar}>
                                            <div className={styles.memBarRow}>
                                            <img src={profilePic} alt={"profile picture"}/>
                                            <div className={styles.Name}>
                                                {props.admin === avatar.id?
                                                <p className={styles.UserName}>{avatar.name} (admin)</p>:
                                                <p className={styles.UserName}>{avatar.name}</p>}

                                                
                                                <p className={styles.NameId}>@{avatar.id}</p>
                                            </div>
                                          </div>
                                            <button onClick={(id)=>RemoveMember(avatar.id)}>Remove</button>
                                        </div>))
                            
                     )
        }}

    return(
        <div >
            <h6 className="mb-4">Board Members</h6>
            {members }
            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                    {
                    adminCheck?
                    (<Alert onClose={handleCloseAlert} severity="error">
                       You can't remove the admin
                    </Alert>)
                    
                    : (<Alert onClose={handleCloseAlert} severity="info">
                    Member removed <b>successfully</b>!
                    </Alert>)
                    
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
        addMember: (id,formData)=> dispatch(AsynRemoveMemberList(id,formData)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMembers);  
