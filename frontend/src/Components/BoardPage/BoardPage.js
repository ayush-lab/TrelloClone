import React, {Component} from 'react';
import {DragDropContext} from 'react-beautiful-dnd';
import {connect} from 'react-redux';
import {initCardList} from '../../actions';
import BoardCard from './BoardCard';
import styles from './CSS/BoardCardList.module.css';
import Navbar from '../Navigation/Navbar';
import BoardNav from '../Navigation/BoardNav';
import BoardAddmore from './BoardAddmore';
import {sort} from '../../actions';
import Gif from '../../assets/Images/143.gif';


class BoardPage extends Component {

    state = {
        BoardId:this.props.match.params.BoardId,
        BoardName:this.props.match.params.BoardName,
        List:'',
    }

    onDragEnd =(result)=> {
        const {destination,source,draggableId} = result;

        if(!destination){
            return;
        }

        this.props.sort(
            source.droppableId,
            destination.droppableId,
            source.index,
            destination.index,
            draggableId
        )

    }

   componentDidMount(){
        
        this.props.ShowListCard(this.state.BoardId);
      

        
   }
    
    render(){
        let {LISTS} =this.props; 
        let title = "";
        let lists;
        let star=false;
        console.log(LISTS);
      

       if(LISTS){

        title=LISTS.list.name;
        star=LISTS.list.starred;
        lists = 
            (<div className={styles.BoardCardParent}>
                <div className={styles.BoardCard}>
                
            { LISTS.list.lists.map(list => (<BoardCard 
            boardId={this.state.BoardId}
            key={list.id}
            title={list.name}
            List_id={list.id} 
            cardList={list.cards}/>))}

            <BoardAddmore
                    boardId={this.state.BoardId}/>

                
                </div>
            </div>);
        
           
                  

       }

      else{
           lists =(
           <div className={styles.loader}>
                <img src={Gif}  alt={"loading"}/>
           </div>);


           title="";
       }

        return(
            <DragDropContext onDragEnd={this.onDragEnd}>        
                <div className={styles.BoardPage}>
                <Navbar/>
                <BoardNav title={title} boardId={this.state.BoardId} />

                        {lists}

           
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
        ShowListCard: (BoardId)=> dispatch(initCardList(BoardId)),
        sort: (a,b,c,d)  => dispatch(sort(a,b,c,d)),
           }


    } 


export default connect(mapStateToProps,mapDispatchToProps)(BoardPage);
