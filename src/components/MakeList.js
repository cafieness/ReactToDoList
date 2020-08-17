import React, { Component } from 'react';
import MakeItem from './MakeItem';

class MakeList extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <MakeItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        editTodo={this.props.editTodo}
        deleteTodo={this.props.deleteTodo}
      />
    ));
  }
}

export default MakeList;