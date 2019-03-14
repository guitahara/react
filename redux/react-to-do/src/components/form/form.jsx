import React from 'react';
import { connect} from 'react-redux';
import {addTodo} from '../../reducers/todo/action-creator';

const Form = ({handleAddTodo}) => (
    <form onSubmit={handleAddTodo}>
        <input type='text' name='todo'></input>
        <button type='submit'>+</button>
    </form>
)

const mapDispatchToProps = (dispatch) => ({
    handleAddTodo: (e) => {
      e.preventDefault()
      dispatch(addTodo(e.target.todo.value))
      e.target.todo.value = ''
    }
  })

export default connect(null, mapDispatchToProps)(Form)
