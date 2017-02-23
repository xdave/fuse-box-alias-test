import { bindActionCreators, Dispatch } from 'redux';
import * as React from 'react';
import { ActionsMap, State } from './types';
import appActions from './actions';
import { connect } from 'react-redux';

export const MainView = ({ message, count, ...actions }: State & ActionsMap) => (
    <div>
        <h1>Message: {message} {count}</h1>
        <button onClick={e => actions.resetState()}>
            Reset State
        </button>
        <button onClick={e => actions.changeMessage('Hello, World!')}>
            Change Message
        </button>
        <button onClick={e => actions.incrementCounter(1)}>
            Increase Counter
        </button>
    </div>
);

export const mapStateToProps = (state: State) => state;
export const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return bindActionCreators(appActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
