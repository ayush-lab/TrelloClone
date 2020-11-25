import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {AsynAddNewCard,AsynAddDescription,AsynEditCardName,AsynEditCardDueDate} from '../../actions';
// import styles from './CSS/BoardCardList.module.css';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ListMembers from './ListMembers';



class BoardMembers extends Component{

    state={
        open:false,
    }

    onOpenModal=()=>{
        this.setState({open:true})
    }

    onCloseModal=()=>{
        this.setState({open:false})
        console.log(this.state.open)
    }


    render(){

        let {LISTS} =this.props;
        console.log(LISTS)
        let members = <p> </p>; 
        
        
        
        if(LISTS){
            if(LISTS.list.lists.members!==[]){
               
                members = ( 
                            <AvatarGroup max={3}>
                                {
                                    LISTS.list.members.map(
                                    avatar=> (<Avatar alt={avatar.name}>{avatar.name[0][0].toUpperCase()}
                                    </Avatar>))
                                }
                                         
                            </AvatarGroup> 
        
                )
            }}
        return(
            <div className="member" onClick={this.onOpenModal}>
                {members}

                <Modal  open={this.state.open} onClose={this.onCloseModal} center>
                   <ListMembers BoardId={this.props.BoardId}/>
                </Modal>

            </div>
                                    
        );
    }

}

const mapStateToProps = state => ({
    LISTS:state.lists,
})

const mapDispatchToProps =dispatch => {
  
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardMembers);


