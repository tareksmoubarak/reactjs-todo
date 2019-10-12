import React, { Component } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/todos/AddTodo";
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      { title: "test 1", id: 1, completed: false },
      { title: "test 2", id: 2, completed: false },
      { title: "test 3", id: 3, completed: false }
    ]
  };

  render() {
    return (
      // JSX = JAVASCRIPT XML SCRIPT
      <div className="App">
        <div className="Container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }

  // TOGGLE Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // DELETE TODO
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // ADD TODO
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    }
    this.setState({
      // `...` copy what i have currently
      todos: [...this.state.todos, newTodo]
    });
  }

}
// function App() {

// }

export default App;
