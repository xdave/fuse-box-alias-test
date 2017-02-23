import { ActionsMap, ChangeMessage, IncrementCounter } from './types';

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
    changeMessage,
    incrementCounter
} as ActionsMap;
