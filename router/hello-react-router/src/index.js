import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Sobre from './components/sobre/index';
import Contato from './components/contato/index';
import Home from './components/home/index';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/sobre' component={Sobre}/>
            <Route path='/contato' component={Contato}/>
            <Route path='/' exact component={Home}/>
            <ul>
                <li><Link to='/sobre'>sobre</Link></li>
                <li><Link to='/contato'>contato</Link></li>
                <li><Link to='/'>home</Link></li>
            </ul>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
