import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { someReducer } from './reducers';
import Main from './Main';


const win: any = window;
const store = win.__store = win.__store || createStore(someReducer);

ReactDOM.render((
    <Provider store={store}>
        <Main />
    </Provider>
), document.body);
