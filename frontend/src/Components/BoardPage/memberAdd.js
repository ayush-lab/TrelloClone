import React, {useState} from 'react';
import styles from './CSS/member.module.css';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {AsynaddMember,AsynaddMemberList,AsynaddMemberTeam} from '../../actions';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


function Member(props){

    let link = window.location.href.split('/');
    let Invitelink = link[0]+'/'+link[1]+'/'+link[2]+'/'+link[3]+'/'+link[4]+'/'+'slug';

    let [emailArray,changeEmail] = useState([])
    let [emailValue,changeValue] =useState(null)
//    let [emailTeam,changeEmailTeam] =useState(null)

    let [emailArrayList,changeEmailList] = useState([])
    let [emailValueList,changeValueList] =useState(null)
    
    let [emailArrayTeam,changeEmailTeam] = useState([])
    let [emailValueTeam,changeValueTeam] =useState(null)



    const [open, setOpen] = React.useState(false);
    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const inputHandler=(event)=>{

       emailValue = changeValue(event.target.value);
    }

    const  addMembers=()=>{
        let formData = {};
        emailArray.push(emailValue)
        formData['members']=emailArray;
        
    
        if(emailValue!==null)
            props.addMember(props.BoardId,formData);
            setOpen(true);  

    }
  

    const inputHandlerList=(event)=>{

        emailValueList = changeValueList(event.target.value);
     }
 
     const  addMembersList=()=>{
         let formData = {};
         emailArrayList.push(emailValueList)
         formData['members']=emailArrayList;
         
     
         if(emailValueList!==null)
             props.addMemberList(props.BoardId,formData);
             setOpen(true);  
     }
   


    const inputHandlerTeam=(event)=>{

        emailValueTeam = changeValueTeam(event.target.value);
     }
 
     const  addMembersTeam=()=>{
         let formData = {};
         emailArrayTeam.push(emailValueTeam)
         formData['members']=emailArrayTeam;
         
     
         if(emailValueTeam!==null)
             props.addMemberTeam(props.BoardId,formData);
             setOpen(true);  
     }
   

      return(
            <>
             
                {props.type==="card" && <div className={styles.Member}>

                <h3>Add members in the card</h3>
                    <input 
                    type={"email"} 
                    className={styles.input}
                    placeholder="Enter email"
                    onChange={(event)=>inputHandler(event)}
                    />

                <Button variant="outlined"  
                onClick={addMembers}
                className={styles.button}>Invite</Button>

                </div>}
                
               {props.type==="list" && <div className={styles.Member}>

                <h3>Invite to board</h3>
                    <input 
                    type="email" 
                    className={styles.input}
                    placeholder="Enter email"
                    onChange={(event)=>inputHandlerList(event)}
                    />

                <Button variant="outlined"  
                onClick={addMembersList}
                className={styles.button}>Invite</Button>

                <h4 className={styles.InviteHeading}>Viewing board Link</h4>
                <p className={styles.InviteLink}>
                    {Invitelink}
                </p>

                </div> }

                  
               {props.type==='Team' && <div className={styles.Member}>

                <h3>Invite to board</h3>
                    <input 
                    type="email" 
                    className={styles.input}
                    placeholder="Enter email"
                    onChange={(event)=>inputHandlerTeam(event)}
                    />

                <Button variant="outlined"  
                onClick={addMembersTeam}
                className={styles.button}>Invite</Button>

               
                </div> }


                <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseAlert}>
                    {
                   
                    <Alert onClose={handleCloseAlert} severity="success">
                        Member added <b>successfully</b>!
                    </Alert>
                    
                    }
                    
                </Snackbar>
              
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
       addMemberTeam: (id,formData)=> dispatch(AsynaddMemberTeam(id,formData)),
       
           }


    } 




export default   connect(mapStateToProps,mapDispatchToProps)(Member);