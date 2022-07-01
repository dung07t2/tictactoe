import { combineReducers } from 'redux';
import { gameReducer } from './reducers/game';

// COMBINED REDUCERS
const reducers = {
    game: gameReducer,
};

export default combineReducers(reducers);
