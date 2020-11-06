import React from 'react';
import styles from './CSS/TeamHome.module.css';
import TeamProfile from '../../assets/Images/TeamProfile.jpg';
import EditIcon from '@material-ui/icons/Edit';


function Profile(props){

    return(
        <div>

            <div className={styles.Profile}>
                <img src={TeamProfile} alt="Profile image"/>

                <div className={styles.ProfileText}>
                    <h2>Team Name</h2>
                    <p>Short Description about the team</p>
                    <button className={styles.EditTeam}>
                        <EditIcon style={{fontSize:'medium'}} /> Edit Details</button>
                    
                </div>

            </div>

        </div>
    );
}

export default Profile; 
