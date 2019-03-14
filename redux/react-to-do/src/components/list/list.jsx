import React from 'react';
import {connect} from 'react-redux';
import {toggleTodo} from '../../reducers/todo/action-creator';
import {SHOW_ACTIVE,SHOW_ALL,SHOW_COMPLETED} from '../../reducers/filters/actions';

const List = ({todos, handleToggleTodo, activeFilter}) => (
    <ul>
    {
      getVisibleTodos(todos,activeFilter).map((todo) => {
        return(
          <li 
            key={todo.id} 
            style={{ textDecoration: todo.completed? 'line-through':'none'}}
            onClick={handleToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        )
      })
    }
  </ul>
)

const getVisibleTodos = (todos, activeFilter) => {
    switch(activeFilter){
        case SHOW_ALL: 
            return todos
        case SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
    }
}

const mapStateToProps = (state) => ({
    todos : state.todos,
    activeFilter: state.visibilityFilter
})
  
const mapDispatchToProps = (dispatch) => ({
    handleToggleTodo: (id) => () => {
      dispatch(toggleTodo(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(List)