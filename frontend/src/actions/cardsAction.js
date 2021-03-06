import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';



export const addCard = (text,listId)=> {

    return {
        type:CONSTANTS.ADD_CARD,
        payload:{text,listId},
        
    }
};


export const archive = (cardId,archive)=> {

    return {
        type:CONSTANTS.ARCHIVE,
        payload:{cardId,archive},
        
    }
};




export const AsynArchive = (cardId,formData)=> {
    
    return dispatch => {

        AuthService.EditCard(cardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
                
                dispatch(archive(cardId,formData["archived"]));
        
            }
        
    
        }).catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}


export const AsynAddNewCard = (ListId,formData,text)=> {
    
    return dispatch => {

        AuthService.BoardCard(ListId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
               
                dispatch(addCard(text,ListId));
        
            }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
            //this.setState({loading:false});
        //this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}

export const addDescription = (text,listId,cardId)=> {

    return {
        type:CONSTANTS.ADD_CARD_DESC,
        payload:{text,listId,cardId},
        
    }
};

export const editCardName = (text,listId,cardId)=> {

    return {
        type:CONSTANTS.EDIT_CARD_NAME,
        payload:{text,listId,cardId},
        
    }
};

export const editCardDueDate = (text,listId,cardId)=> {

    return {
        type:CONSTANTS.EDIT_CARD_DUEDATE,
        payload:{text,listId,cardId},
        
    }
};

export const editListName = (text,listId)=> {

    return {
        type:CONSTANTS.EDIT_LIST_NAME,
        payload:{text,listId},
        
    }
};

export const Error = (response)=> {

    return {
        type:CONSTANTS.ERROR,
        payload:response,
        
    }
};




export const AsynAddDescription = (ListId,CardId,formData,text)=> {
    
    return dispatch => {

       AuthService.EditCard(CardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
          { 
               
                dispatch(addDescription(text,ListId,CardId));
        
           }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
        //     this.setState({loading:false});
        // this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}



export const AsynEditCardName = (ListId,CardId,formData,text)=> {
    
    return dispatch => {

       AuthService.EditCard(CardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
          { 
               
                dispatch(editCardName(text,ListId,CardId));
        
           }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
        //     this.setState({loading:false});
        // this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}


export const AsynEditCardDueDate = (ListId,CardId,formData,text)=> {
    
    return dispatch => {

       AuthService.EditCard(CardId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
          { 
               
                dispatch(editCardDueDate(text,ListId,CardId));
        
           }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
        //     this.setState({loading:false});
        // this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}



export const AsynEditListName = (ListId,formData,text)=> {
    
    return dispatch => {

       AuthService.EditList(ListId,formData)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
          { 
               
                dispatch(editListName(text,ListId));
        
           }
           
        else if(response.status===401) alert("Something went wrong")})
        
        .catch(error=>{console.log(error.response); 
        //     this.setState({loading:false});
        // this.setState({text:error.response.data.detail, type: "error"})

        
        
        })
    }
}