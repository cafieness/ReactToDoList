import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import MakeList from './components/MakeList';
import AddItem from './components/AddItem';
import './App.css';


class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then((response) => this.setState({ todos: response.data }));
  }

  addTodo = (title) => {
    axios.post(`https://jsonplaceholder.typicode.com/todos/`, {
      userId: 1,
      title,
      completed: false,
    }).then((response) => {
      if(response.data.id === 201){
        response.data.id = this.state.todos.length + 1;
      }
      this.setState({ todos:
        [...this.state.todos, response.data]
      })
    }
    );
  }

  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(() => this.setState({todos: [...this.state.todos.filter((item) => item.id !== id)]}));
  }

  editTodo = (id, ref) => {
  const node = ref.current;
  axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(() => this.setState({
      todos: [...this.state.todos.map((item) => {
      if(item.id === id){
        node.disabled = !node.disabled;
        node.classList.toggle('textBlock-enable')
        item.title = node.value;
      }
      return item
    })
    ]
  }))

  }

  markComplete = (id) => {
    this.setState({
      todos: [...this.state.todos.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })]
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <h1 className="title">To Do List</h1>
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <AddItem addTodo={this.addTodo} />
                  <MakeList
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    editTodo={this.editTodo}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
            )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
