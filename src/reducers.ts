import { AppActions, State } from './types';

export const initial: State = {
    message: 'This is the initial state',
    count: 0
};

export const someReducer = (state: State = initial, action: AppActions) => {
    switch (action.type) {
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
