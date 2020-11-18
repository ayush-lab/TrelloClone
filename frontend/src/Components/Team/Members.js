import React, {useState} from 'react';
import styles from './CSS/Members.module.css';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import MemBar from './memBar';


function members() {

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
                         <h3> Total Members <span>25</span></h3>
                         <button><GroupAddIcon className={styles.GroupIcon}/>Invite team members</button>

                        
                            
                     </div>
                    


                    <hr/>


                  
                    <MemBar/>
                     <MemBar/>
                      <MemBar/>
                      <MemBar/>


                </div>

            </div>
        </div>
    );

 
}

export default members;  
