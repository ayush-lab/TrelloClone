import React, {useState} from 'react';
import styles from './CSS/Members.module.css';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MemBar from './memBar';
import TransitionsModal from '../BoardPage/Modal';

function members(props) {

    let users = null;
    let total_members=null;

    if(props.users!==null){
        console.log(props.users.team)
        total_members=props.users.team.members.length;
       users= props.users.team.members.map(user=>
            (<MemBar Name={user.name} key={user.id} id={user.id} teamId={props.users.team.id}/>
        ))
    }

    

    return(
        <div>

            <div className={styles.flexRow}>

                <div className={styles.MembersCount}>
                    <h3> Members of Team</h3>
                    <p> Team Members <span>23</span></p>
                    <p>Guest Members <span>12</span> </p>
                </div>

                <div className={styles.HeadingMain}>


                    <div className={styles.HeadingBar}>
                         <h3> Total Members <span>{total_members}</span></h3>
                         
                         <TransitionsModal button={"TeamBoard"} TeamId={props.users.team.id} />
                        
                            
                     </div>
                    


                    <hr/>
                        {users}


                </div>

            </div>
        </div>
    );

 
}

export default members;  
