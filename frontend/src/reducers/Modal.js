import {CONSTANTS } from '../actions';


const initialState = null;


const Members = (state=initialState,action)=> {
    switch (action.type){

        case CONSTANTS.ADD_MEMBERS:
        
            return {...state, Boards:action.payload}
            break;
            
        case CONSTANTS.ADD_MEMBERS_LIST:
        
            return {...state, Boards:action.payload}
            break;
            

        
            


        default:
            
            return state;
    }
};

export default Members;