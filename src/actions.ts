import { ActionsMap, ChangeMessage, IncrementCounter, ResetState } from './types';

export const resetState = (): ResetState => {
    return {
        type: 'RESET_STATE'
    };
};

export const changeMessage = (message: string): ChangeMessage => {
    return {
        type: 'CHANGE_MESSAGE',
        message
    };
};

export const incrementCounter = (by: number): IncrementCounter => {
    return {
        type: 'INCREMENT_COUNTER',
        by
    };
};

export default {
    resetState,
    changeMessage,
    incrementCounter
} as ActionsMap;
