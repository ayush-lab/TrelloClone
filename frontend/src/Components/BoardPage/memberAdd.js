import React, {useState} from 'react';
import styles from './CSS/member.module.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {AsynaddMember,AsynaddMemberList} from '../../actions';


function Member(props){

    let [emailArray,changeEmail] = useState([])
    let [emailValue,changeValue] =useState(null)

    let [emailArrayList,changeEmailList] = useState([])
    let [emailValueList,changeValueList] =useState(null)

    const inputHandler=(event)=>{

       emailValue = changeValue(event.target.value);
    }

    const  addMembers=()=>{
        let formData = {};
        emailArray.push(emailValue)
        formData['members']=emailArray;
        
    
        if(emailArray)
            props.addMember(props.BoardId,formData);

    }
  

    const inputHandlerList=(event)=>{

        emailValueList = changeValueList(event.target.value);
     }
 
     const  addMembersList=()=>{
         let formData = {};
         emailArrayList.push(emailValueList)
         formData['members']=emailArrayList;
         
     
         if(emailArrayList)
             props.addMemberList(props.BoardId,formData);
 
     }
   

      return(
            <>
             
                {props.type==="card" ?<div className={styles.Member}>

                <h3>Add members in the card</h3>
                    <input 
                    type={"email"} 
                    className={styles.input}
                    placeholder="Enter email"
                    onChange={(event)=>inputHandler(event)}
                    />

                <Button variant="outlined"  
                onClick={addMembers}
                className={styles.button}>Sumbit</Button>

                </div>:<div className={styles.Member}>

                <h3>Add members in the board</h3>
                    <input 
                    type="email" 
                    className={styles.input}
                    placeholder="enter email"
                    onChange={(event)=>inputHandlerList(event)}
                    />

                <Button variant="outlined"  
                onClick={addMembersList}
                className={styles.button}>Sumbit</Button>

                </div> }
           

              
            </>
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