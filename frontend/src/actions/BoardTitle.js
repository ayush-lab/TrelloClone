import {CONSTANTS} from '../actions';

export const addTitle = (text)=> {

    console.log('add title is weoking')
    return {
        type:CONSTANTS.Add_Title,
        payload:text,
        
    }
};