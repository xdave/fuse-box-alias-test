import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { AppActions, State, Some } from './types';

export const initial: Some = {
    message: 'This is the initial state',
    count: 0
};

export const someReducer = (state: Some = initial, action: AppActions) => {
    switch (action.type) {
        case 'RESET_STATE':
            return initial;
        case 'CHANGE_MESSAGE':
            return {
                ...state,
                message: action.message
            };
        case 'INCREMENT_COUNTER':
            return {
                ...state,
                count: state.count + action.by
            };
        default:
            return state;
    }
};

export default combineReducers({
    some: someReducer,
    routing: routerReducer
});
