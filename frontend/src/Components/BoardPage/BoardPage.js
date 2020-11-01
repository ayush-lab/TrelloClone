import React, {Component} from 'react';
import {connect} from 'react-redux';
import BoardCard from './BoardCard';
import styles from './CSS/BoardCardList.module.css';
import Navbar from '../Navigation/Navbar';
import BoardNav from '../Navigation/BoardNav';
import BoardAddmore from './BoardAddmore';


class BoardPage extends Component{
  
    render(){

        const {lists }=this.props; 
        console.log(lists);


        return(

            <div className={styles.BoardPage}>
                <Navbar/>
                <BoardNav/> 
               
             <div className={styles.BoardCardParent}>
                <div className={styles.BoardCard}>
                  
                    {
                        lists.map(list => <BoardCard 
                            key={list.id}
                            title={list.title}
                            id={list.id} 
                            cardList={list.cards}/>)
                    }
                    <BoardAddmore/>
                  
                   
                </div>
              </div>

            
            </div>

        );
    }

}


const mapStateToProps = state => ({
    lists:state.lists
})

export default connect(mapStateToProps)(BoardPage);
