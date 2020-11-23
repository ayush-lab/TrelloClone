import {CONSTANTS } from '../actions';


const initialState = null;
let newState;

const Team = (state=initialState,action)=> {
    switch (action.type){

       
           
      

        case CONSTANTS.CREATE_TEAM:

            return {...state,redirect:action.payload}
            break;
        
        case CONSTANTS.VIEW_TEAM:
        
            return {...state, Team:action.payload, redirect:null}
            break;

        default:
            
            return state;
    }
};

export default Team;