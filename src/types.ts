import { Action, ActionCreator, ActionCreatorsMapObject } from 'redux';

export interface Some {
    message: string;
    count: number;
}

export interface State {
    some: Some;
}

export interface ResetState extends Action {
    type: 'RESET_STATE';
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
    resetState: ActionCreator<ResetState>;
    changeMessage: ActionCreator<ChangeMessage>;
    incrementCounter: ActionCreator<IncrementCounter>;
}

export type AppActions = ResetState | ChangeMessage | IncrementCounter;
