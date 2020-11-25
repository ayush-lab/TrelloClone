import React, {useState} from 'react';
import styles from './CSS/Members.module.css';
import profilePic from '../../assets/Images/TeamProfile.png';


function memBar(props) {

    return(
        <div >
            <div className={styles.memBar}>

                <div className={styles.memBarRow}>
                    <img src={profilePic} alt={"ptofile picture"}/>
                    <div className={styles.Name}>
                        <p className={styles.UserName}>{props.Name}</p>
                        <p className={styles.NameId}>@121223</p>
                    </div>
                </div>

                <button>Remove</button>
            
            </div>
            <hr className="mt-3 mb-3"/>
        </div>
    );

 
}

export default memBar;  
