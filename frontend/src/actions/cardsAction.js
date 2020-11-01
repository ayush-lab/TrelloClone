import {CONSTANTS} from '../actions';

export const addCard = (text,listId)=> {

    return {
        type:CONSTANTS.ADD_CARD,
        payload:{text,listId},
        
    }
};