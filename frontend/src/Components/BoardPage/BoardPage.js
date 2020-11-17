import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {connect} from 'react-redux';
import {initCardList} from '../../actions';
import BoardCard from './BoardCard';
import styles from './CSS/BoardCardList.module.css';
import Navbar from '../Navigation/Navbar';
import BoardNav from '../Navigation/BoardNav';
import BoardAddmore from './BoardAddmore';



class BoardPage extends Component{

    state = {
        BoardId:this.props.match.params.BoardId,
        BoardName:this.props.match.params.BoardName,
        List:'',
    }

    onDragEnd =()=> {
        // reordering logic

    }

   componentDidMount(){
        
        this.props.ShowListCard(this.state.BoardId);
      

        
   }
    
    render(){
        let {LISTS} =this.props; 
        let title = "";
        let lists;
        console.log(LISTS);
      

       if(LISTS){

        title=LISTS.list.name;
    
        lists = LISTS.list.lists.map(list => (<BoardCard 
            boardId={this.state.BoardId}
            key={list.id}
            title={list.name}
            id={list.id} 
            cardList={list.cards}/>));

       }

       else{
           lists =<p>Loading...</p>;
           title="";
       }

        return(
            <DragDropContext onDragEnd={this.onDragEnd}>        
                <div className={styles.BoardPage}>
                <Navbar/>
                <BoardNav title={title}/>
                
             <div className={styles.BoardCardParent}>
                <div className={styles.BoardCard}>
                  
                        {lists}

                    <BoardAddmore
                    boardId={this.state.BoardId}/>
                  
                   
                </div>
              </div>
           
            </div>
           </DragDropContext>
        );


}}


const mapStateToProps = state => ({
    LISTS:state.lists,
    board:state.board,
})

const mapDispatchToProps =dispatch => {
  
    return {
        ShowListCard: (BoardId)=> dispatch(initCardList(BoardId))

           }
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardPage);
