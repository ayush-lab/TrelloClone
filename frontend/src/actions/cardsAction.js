import {CONSTANTS} from '../actions';
import AuthService from '../ApiServices/services';



export const addCard = (text,listId)=> {

    return {
        type:CONSTANTS.ADD_CARD,
        payload:{text,listId},
        
    }
};



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