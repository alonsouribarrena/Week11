import React, { Component } from 'react'

export default class addTodo extends Component {

  state={
    task: "",
    desc: ""
  }

  onChange =(e)=> this.setState({[e.target.name]: e.target.value})

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      task: "",
      desc: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} >
          <h1>New Task</h1>
          <input 
            type="text" 
            name="task" 
            placeholder='Your task'
            value={this.state.task}
            onChange={this.onChange}
          />
          <input 
            type="text" 
            name="desc" 
            placeholder='Describe it'
            value={this.state.desc}
            onChange={this.onChange}
          />
          <input 
            type='submit' 
            value="submit"
          />
        </form>
      </div>
    )
  }
}
