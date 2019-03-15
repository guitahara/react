import React from 'react';
import {Route} from 'react-router-dom';
import List from '../components/dogs/list/index';
import Insert from '../components/dogs/insert/index';
import Edit from '../components/dogs/edit/index';
import Details from '../components/dogs/details/index';
import Home from '../components/home/index';


const Routes = () => (
    <div>
        <Route path='/' exact component={Home}/>
        <Route path='/dogs' component={List}/>
        <Route path='/dogs/:id' component={Details}/>
        <Route path='/dogs/new' component={Insert}/>
        <Route path='/dogs/update/:id' component={Edit}/>
    </div>
)

export default Routes