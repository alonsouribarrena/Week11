import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    const { id, task, desc} = this.props.todo
    return (
      <div>
        <h3>{ task }</h3>
        <p>{ desc }</p>
        {/* <a href="">Done</a> */}
        <button onClick={this.props.delTodo.bind(this, id)}>Done</button>
      </div>
    )
  }
}

TodoItem.propTypes ={
  todo: PropTypes.object.isRequired
}
