import {CONSTANTS } from '../actions';


const initialState = [{

    title: 'this is the title of the board',
}];


const board = (state=initialState,action)=> {
    switch (action.type){

        case CONSTANTS.Add_Title:
        
            state[0].title =action.payload;

            return state;


        default:
            
            return state;
    }
};

export default board;