import {CONSTANTS } from '../actions';


const initialState = null;


const board = (state=initialState,action)=> {
    switch (action.type){

        case CONSTANTS.BOARDS:
        
            return {...state, Boards:action.payload}
            


        default:
            
            return state;
    }
};

export default board;