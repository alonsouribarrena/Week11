import React, { Component } from 'react'
import TodoItem from './TodoItem'
// import PropTypes from 'prop-types'

export default class Todo extends Component {
  render() {
    return this.props.todos.map((todo)=>(
      <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo}/>
    ))
  }
}


// Todo.propTypes ={
//   todo: PropTypes.array.isRequired,
//   delTodo: PropTypes.integer.isRequired
// }