import React, {Component} from 'react';
import styles from './CSS/BoardCardList.module.css';
import BoardList from './BoardList';


class BoardCard extends Component{

    render(){

        return(
            <div className={styles.Card}>
                <div className={styles.CardHeader}>
                    
                    <div className={styles.CardTitleInput}>
                         <p>Title of card</p>
                    </div>
                   
                    <div className={styles.CardHeaderMenu}>
                    <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>

                </div>
                     <BoardList/>
                     <BoardList/>
                    

                <div className={styles.CardFooter}>
                    <div className={styles.CardAddCard}>
                <i className="fa fa-plus"> Add another card</i>
                    </div>
                  
                </div>


            </div>

        );
    }

}
export default BoardCard;
