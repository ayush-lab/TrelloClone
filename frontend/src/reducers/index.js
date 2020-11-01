import {combineReducers} from 'redux';
import listReducers from './listReducers';



export default combineReducers({
    lists:listReducers
});