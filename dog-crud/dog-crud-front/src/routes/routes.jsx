import React from 'react';
import {Route, Switch} from 'react-router-dom';
import List from '../components/dogs/list/index';
import Insert from '../components/dogs/insert/index';
import Edit from '../components/dogs/edit/index';
import Details from '../components/dogs/details/index';
import Home from '../components/home/index';


const Routes = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/dogs/new' component={Insert}/>
            <Route path='/dogs/edit/:id' component={Edit}/>
            <Route path='/dogs' component={List}/>
        </Switch>
    </div>
)

export default Routes