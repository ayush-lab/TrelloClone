import {combineReducers} from 'redux';
import listReducers from './listReducers';
import Board from './Board';
import Home from './Home';
import Members from './Modal';
import Team from './Team';

export default combineReducers({
    lists:listReducers,
    board:Board,
    Home:Home,
    Members:Members,
    Team:Team,
});