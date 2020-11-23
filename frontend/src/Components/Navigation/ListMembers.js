import React, {useState} from 'react';
import styles from './visibility.module.css';
import profilePic from '../../assets/Images/TeamProfile.jpg';
import {connect} from 'react-redux';

function ListMembers(props) {


    let {LISTS} =props;
     let members = <p> </p>; 
        
     if(LISTS){
        if(LISTS.list.lists.members!==[]){
           
            members = (
                           
                                LISTS.list.members.map(
                                avatar=> (<div className={styles.memBar}>
                                            <div className={styles.memBarRow}>
                                            <img src={profilePic} alt={"ptofile picture"}/>
                                            <div className={styles.Name}>
                                                <p className={styles.UserName}>{avatar.name}</p>
                                                <p className={styles.NameId}>@{avatar.id}</p>
                                            </div>
                                          </div>
                                        <button>Remove</button></div>))
                            
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
  
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(ListMembers);  
