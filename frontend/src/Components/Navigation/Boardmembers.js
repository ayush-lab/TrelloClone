import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {AsynAddNewCard,AsynAddDescription,AsynEditCardName,AsynEditCardDueDate} from '../../actions';
// import styles from './CSS/BoardCardList.module.css';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

class BoardMembers extends Component{

    state={

    }

    render(){

        let {Members} =this.props;
        let members = <p> </p>; 
        
        
        console.log(Members);
        if(Members){
            if(Members.Boards.members!==[]){
                members = (
                   
                                    
                                   <AvatarGroup max={3}>
                                        {
                                         Members.Boards.members.map(
                                          avatar=> (<Avatar alt={avatar}>{avatar[0].toUpperCase()}</Avatar>))
                                        }
                                         
                                    </AvatarGroup> 
        
                            
                )
            }}
        return(
            <div className="ml-3">
                {members}
            </div>
                                    
        );
    }

}

const mapStateToProps = state => ({
    Members:state.Members,
})

const mapDispatchToProps =dispatch => {
  
    return {};
}

export default connect(mapStateToProps,mapDispatchToProps)(BoardMembers);




