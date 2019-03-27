import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from './reducers/index';
import multi from 'redux-multi'
import promise from 'redux-promise';

const store = applyMiddleware(multi,promise)(createStore)(reducer)

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App /> 
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
