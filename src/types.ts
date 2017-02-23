import { Action, ActionCreator, ActionCreatorsMapObject } from 'redux';

export interface State {
    message: string;
    count: number;
}

export interface ChangeMessage extends Action {
    type: 'CHANGE_MESSAGE';
    message: string;
}

export interface IncrementCounter extends Action {
    type: 'INCREMENT_COUNTER';
    by: number;
}

export interface ActionsMap extends ActionCreatorsMapObject {
    changeMessage: ActionCreator<ChangeMessage>;
    incrementCounter: ActionCreator<IncrementCounter>;
}

export type AppActions = ChangeMessage | IncrementCounter;
