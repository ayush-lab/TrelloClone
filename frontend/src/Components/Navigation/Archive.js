import React, {useState} from 'react';
import styles from './visibility.module.css';
// import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {AsynaddMember,AsynaddMemberList} from '../../actions';


function Member(props){

   
   

      return(
            <div className={styles.archiveList}>
             
                <h5 className="mb-4">Your Archive cards </h5>

                <div className={styles.CardList}>
                    Slice shot of badminton
                </div>
                <div className={styles.CardList}>
                    text
                </div>
                <div className={styles.CardList}>
                    text
                </div>
                
                

              
            </div >
        );
    

}

const mapStateToProps = state => ({
    Members:state.Members,
    
})

const mapDispatchToProps =dispatch => {
  
    return {
       addMember: (id,formData)=> dispatch(AsynaddMember(id,formData)),
       addMemberList: (id,formData)=> dispatch(AsynaddMemberList(id,formData)),
           }


    } 




export default   connect(mapStateToProps,mapDispatchToProps)(Member);