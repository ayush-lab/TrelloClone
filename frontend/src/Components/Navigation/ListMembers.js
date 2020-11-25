import React, {useState} from 'react';
import styles from './visibility.module.css';
import profilePic from '../../assets/Images/TeamProfile.png';
import {connect} from 'react-redux';
import {AsynRemoveMemberList} from '../../actions';



function ListMembers(props) {

    const RemoveMember =(memberId)=>{
       console.log('memberId=',memberId, " ","boardId=",props.BoardId); 
       let formData = {};
       formData['member']=memberId;    
       props.addMember(props.BoardId,formData);
    
        
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
                                                <p className={styles.UserName}>{avatar.name}</p>
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
