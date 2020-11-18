import {combineReducers} from 'redux';
import listReducers from './listReducers';
import Board from './Board';
import Home from './Home';


export default combineReducers({
    lists:listReducers,
    board:Board,
    Home:Home,
});