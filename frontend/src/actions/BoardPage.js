import {CONSTANTS} from '.';
import AuthService from '../ApiServices/services';


export const addTitle = (text)=> {

    return {
        type:CONSTANTS.Add_Title,
        payload:text,
        
    }
};

export const setCardList =(items)=>{

    return {
        type:CONSTANTS.SET_CARD_LIST,
        payload:items,
    };
};

export const initCardList = (BoardId)=> {
    
    return dispatch => {

        AuthService.GetBoard(BoardId)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
                dispatch(setCardList(response.data));
        
            }})
           
       
        
        .catch(error=>{
          //something
        
        })
    }
}


