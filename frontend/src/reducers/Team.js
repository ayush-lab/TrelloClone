import {CONSTANTS } from '../actions';


const initialState = null;
let newState;

const Team = (state=initialState,action)=> {
    switch (action.type){

       
           
        case CONSTANTS.VIEW_TEAM:
        
            return {...state, Team:action.payload}
       
        default:
            
            return state;
    }
};

export default Team;