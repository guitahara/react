import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Form from './components/form/form';
import Filter from './components/filter/filter';
import List from './components/list/list';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Filter/>
          <Form/>
          <List/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  todos : state.todos
})

export default connect(mapStateToProps)(App);
