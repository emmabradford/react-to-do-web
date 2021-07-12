import logo from './logo.svg';
//import './App.css';
import Todo from './Todo';
import React, {Component} from 'react';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content:"watch untamed" },
      { id: 2, content:"read mdzs" }
    ]
  }

  deleteTodo = (id) =>{
    console.log(id);
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}v/>
      </div>
    );
  }
}

export default App;
