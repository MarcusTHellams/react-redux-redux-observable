import React from 'react';
import ReactDom from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './app/reducers/';
import App from './app/components/app.component';
import {Provider} from 'react-redux';
import {createEpicMiddleware, combineEpics} from 'redux-observable';
import {pingEpic, itemsEpic} from './app/actions';

const epicMiddleware = createEpicMiddleware(combineEpics(pingEpic, itemsEpic));

const store = createStore(allReducers, applyMiddleware(epicMiddleware));

ReactDom.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
