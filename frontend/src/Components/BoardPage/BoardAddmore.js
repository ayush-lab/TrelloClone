import React, {Component} from 'react';
import styles from './CSS/BoardCardList.module.css';


class BoardAddmore extends Component{

    render(){

        return(

            <div className={styles.BoardAddmore}>
                
                <i className="fa fa-plus"> Add another card</i>

            </div>

        );
    }

}
export default BoardAddmore;
