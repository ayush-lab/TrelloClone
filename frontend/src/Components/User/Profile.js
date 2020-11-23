import React from 'react';
import styles from './CSS/Profile.module.css';
import Avatar from '@material-ui/core/Avatar';
import Navbar from '../Navigation/Navbar';


function Profile(){

    return (
        <>
        <Navbar/>
        <div className={styles.profileSection}>
            <div className={styles.profile}>
                    <Avatar className={styles.avatar}/>
                <h5 className={styles.userName}>Ayush Verma</h5>
                <h6 className={styles.userId}>@ayush19112</h6>
            </div>  
        </div>

        <div className={styles.AboutSection}>
      


        <div className={styles.bio}>

            
            <div className={styles.user}>
                <h4 className={styles.AboutText} >About user</h4>
                <hr className={styles.About}/>
                <h5>Username</h5>
                <input className={styles.input} type="text"/>
            </div>

             
            <div className={styles.bioDesc}>
                <h5>bio</h5>
                <input className={styles.input} type="text"
                    placeholder="Planning makes it easier"/>
            </div>

            <button>Save</button>

        </div>
        </div>
        </>
    );    
}

export default Profile;