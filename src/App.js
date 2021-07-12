import logo from './logo.svg';
//import './App.css';
import Todo from './Todo';
import React, {Component} from 'react';

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

  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
