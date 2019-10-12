import React, { Component } from "react";
// import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Axios from "axios";

// COMPONENTS
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';
import About from './components/pages/about/About';

// CSS 
import "./App.css";

class App extends Component {
  state = {
    todos: [
      // { title: "test 1", id: 1, completed: false },
      // { title: "test 2", id: 2, completed: false },
      // { title: "test 3", id: 3, completed: false }
    ]
  };

  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState( { todos: res.data } ))
  }

  render() {
    return (
      // JSX = JAVASCRIPT XML SCRIPT
      <Router>
        <div className="App">
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route exact path="/home" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
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
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  // ADD TODO
  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    }).then(res => this.setState({
      // `...` copy what i have currently
      todos: [...this.state.todos, res.data]
    }));
  }

}
// function App() {

// }

export default App;
