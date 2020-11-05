import {combineReducers} from 'redux';
import listReducers from './listReducers';
import Board from './Board';


export default combineReducers({
    lists:listReducers,
    board:Board,
});