import React, { Component } from 'react';
import Routes from '../routes/routes';
import Drawer from './template/drawer';

class App extends Component {
  render() {
    return (
        <div>
            <Drawer/>
            <Routes/>
        </div>
    );
  }
}

export default App;
