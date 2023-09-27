import './App.css';
import Todo from './components/Todo';
import React, { Component } from 'react'
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {
  state = {
    todos:[
      {
        id:uuidv4(),
        task: "take the trash",
        desc: "before noon"
      },  
    ]
  };

  delTodo =(id)=>{
    this.setState({todos:[...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (state) =>{
    const newTodo = {
      id:uuidv4(),
      task: state.task,
      desc: state.desc
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div>
        <AddTodo addTodo={this.addTodo} />
        <h1>My Tasks</h1>
        <Todo todos={this.state.todos} delTodo={this.delTodo}/>
      </div>
    )
  }
}

