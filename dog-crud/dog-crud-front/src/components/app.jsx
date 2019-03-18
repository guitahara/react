import React, { Component } from 'react';
import Routes from '../routes/routes';
import Template from './template/index';
import {Grid} from '@material-ui/core'

class App extends Component {
  render() {
    return (
        <Grid xs={12}>
          <Template>
            <Routes/>
          </Template>
        </Grid>
    );
  }
}

export default App;
