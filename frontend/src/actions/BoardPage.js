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


export const permission =(items)=>{

    return {
        type:CONSTANTS.PERMISSION,
        payload:items,
    };
};

export const AsynPermission = (BoardId,formdata)=> {
    
    return dispatch => {

        AuthService.EditBoard(BoardId,formdata)
        .then(response => {console.log('Response:', response) 

        if(response.status ===201 || response.status ===200 || response.status ===202) 
          
            { 
                dispatch(permission(response.data));
        
            }})
           
       
        
        .catch(error=>{
          //something
        
        })
    }
}


