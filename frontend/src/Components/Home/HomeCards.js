import React, {Component} from 'react';
import styles from './CSS/HomeCards.module.css';
import StarsRoundedIcon from '@material-ui/icons/StarsRounded';

class HomeCards extends Component{

    render(){

        return(
            <>
               
                <div className={styles.boardsCardSection}>

                    <p className={styles.boardTitle}>Flow the new Trello </p>        
                    <div className={styles.boardCardStar}> <StarsRoundedIcon /> </div>

                </div>

            </>
        );
    }

} 

export default HomeCards;