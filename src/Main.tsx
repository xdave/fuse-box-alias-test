import * as React from 'react';
import { Link } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { ActionsMap, State, Some } from './types';
import appActions from './actions';

export const MainView = ({ message, count, ...actions }: Some & ActionsMap) => (
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
        <hr />
        <Link to="/other">Go to another page</Link>
    </div>
);

export const mapStateToProps = (state: State) => state.some;
export const mapDispatchToProps = (dispatch: Dispatch<State>) => {
    return bindActionCreators(appActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
