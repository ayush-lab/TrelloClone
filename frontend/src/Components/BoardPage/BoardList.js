import React, {Component} from 'react';
import styles from './CSS/BoardCardList.module.css';

class BoardList extends Component{

    render(){

        return(

            <div className={styles.CardList}>

                <div className={styles.CardLabel}>

                    <div className={styles.CardListColor}>
                        
                    </div>

                    <div className={styles.CardListColor}>
                        
                    </div>



                </div>

                <div className={styles.ListTitle}>
                    {this.props.heading}
                </div>

                <div className={styles.List_Details_Indicator}>
                    <i class="fa fa-info-circle" aria-hidden="true"></i>
                </div>

            </div>

        );
    }

}
export default BoardList;
