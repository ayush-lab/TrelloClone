import React, {Component} from 'react';
import styles from './CSS/TeamHome.module.css';


class AddTeam extends Component{

    render(){

        return(
            <>
               
                <div className={styles.boardsCardSection}>

                    <p className={styles.boardTitle}>Add new Board</p>        
                   
                </div>

            </>
        );
    }

} 

export default AddTeam;