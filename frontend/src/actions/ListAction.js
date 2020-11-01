import {CONSTANTS} from './index';

export const addList = (title)=> {
    return {
        type:CONSTANTS.ADD_LIST,
        payload:title
    }
};