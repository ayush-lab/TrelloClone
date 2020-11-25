import React from 'react';
import styles from './CSS/TeamHome.module.css';
import TeamProfile from '../../assets/Images/TeamProfile.png';
import EditIcon from '@material-ui/icons/Edit';


function Profile(props){

    return(
        <div>

            <div className={styles.Profile}>
                <img src={TeamProfile} alt="Profile image"/>

                <div className={styles.ProfileText}>
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                    <button className={styles.EditTeam}>
                        <EditIcon style={{fontSize:'medium'}} /> Edit Details</button>
                    
                </div>

            </div>

        </div>
    );
}

export default Profile; 
