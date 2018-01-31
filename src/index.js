import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MDPTestLauncher from './components/MDPTestLauncher';

import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore, {history} from './store';
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

const target = document.querySelector('#root');
let store = configureStore();

/**
 * Top level render with router support
 */

ReactDOM.render(
    <Provider store={store}>
        <Router let history={history}>
            <div>
                <MDPTestLauncher/>
            </div>
        </Router>
    </Provider>,
    target
);


registerServiceWorker();

