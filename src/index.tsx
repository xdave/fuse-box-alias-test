import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

import { Action, ActionCreator, Dispatch, Store } from 'redux';
import { bindActionCreators, createStore } from 'redux';

interface State {
    message: string;
}

interface SomeAction extends Action {
    type: 'SOME_ACTION';
    message: string;
}

interface Actions {
    someAction: ActionCreator<SomeAction>;
}

const someAction = (message: string): SomeAction => {
    return {
        type: 'SOME_ACTION',
        message
    };
};

const initial: State = {
    message: 'This is the initial state'
};

const someReducer = (state: State = initial, action: SomeAction) => {
    switch (action.type) {
        case 'SOME_ACTION':
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
};

const MainView = ({ message, ...actions }: State & Actions) => (
    <div>
        <h1>Message: {message}</h1>
        <button onClick={e => actions.someAction('Hello, World!')}>
            Change Message
        </button>
    </div>
);

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return bindActionCreators({ someAction }, dispatch);
};

const Main = connect(mapStateToProps, mapDispatchToProps)(MainView);


const win: any = window;
win.__store = win.__store || createStore(someReducer);
const element = document.body;

ReactDOM.render((
    <Provider store={win.__store}>
        <Main />
    </Provider>
), element);
