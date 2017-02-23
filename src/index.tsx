import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory, Route } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import Main from './Main';
import { Other } from './Other';

const middleware = [
    routerMiddleware(browserHistory)
];

const win: any = window;

const composeEnhancers =
    win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = win.__store = win.__store || createStore(
    reducers,
    enhancer);

const history = win.__hist = win.__hist || syncHistoryWithStore(
    browserHistory, store);

const routes = win.__routes = win.__routes || [
    <Route path="/" component={Main} />,
    <Route path="/other" component={Other} />
];

ReactDOM.render((
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>
), document.body);
