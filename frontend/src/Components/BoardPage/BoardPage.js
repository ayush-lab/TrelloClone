import React, {Component} from 'react';
import BoardCard from './BoardCard';
import styles from './CSS/BoardCardList.module.css';
import Navbar from '../Navigation/Navbar';
import BoardNav from '../Navigation/BoardNav';
import BoardAddmore from './BoardAddmore';


class BoardPage extends Component{
  
    render(){

        return(

            <div className={styles.BoardPage}>
                <Navbar/>
                <BoardNav/> 
               
             <div className={styles.BoardCardParent}>
                <div className={styles.BoardCard}>
                    <BoardCard/>
                    <BoardCard/>
                   
                    
                    <BoardAddmore/>
                  
                   
                </div>
              </div>

            
            </div>

        );
    }

}
export default BoardPage;
