import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';

export const addList = (data)=> {
    return {
        type:CONSTANTS.ADD_LIST,
        payload:data,
    }
};

export const error_list = (data)=> {
    return {
        type:CONSTANTS.LIST_ERRORS,
        payload:data,
    }
};


export const AsynAddNewList = (BoardId,formData,text)=> {
    
    return dispatch => {

        AuthService.BoardList(BoardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(addList(text));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            dispatch(error_list(error.response.statusText))

        
        
        })

    }
}



export const addMembers = (data)=> {
    return {
        type:CONSTANTS.ADD_MEMBERS,
        payload:data,
    }
};

export const addMembersList = (data)=> {
    return {
        type:CONSTANTS.ADD_MEMBERS_LIST,
        payload:data,
    }
};

export const AsynaddMember = (CardId,formData)=> {
    
    return dispatch => {

        AuthService.AddMembersCard(CardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(addMembers(formData));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })

     }
}



export const AsynaddMemberList = (BoardId,formData)=> {
    
    return dispatch => {

        AuthService.AddMembers(BoardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
             
                dispatch(addMembersList(formData));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })

     }
}


export const sort=(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
)=> {
    return {
        type:CONSTANTS.DRAGGED_ITEM,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }

    }
}