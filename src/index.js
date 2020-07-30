import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import App from './Containers/App.js';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.register();