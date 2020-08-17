import React, { Component } from 'react';
import { faTrash , faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MakeItem extends Component {
state = {
    title: this.props.todo.title
}

isCompleted = () => {
  return {
    textDecoration: this.props.todo.completed ? 'line-through' : 'none',
  };
}

onChange = (e) => this.setState({ title: e.target.value });

  render() {
    let id = this.props.todo.id;
    const ref = React.createRef();
    return (
      <div className="todoBlock" style={this.isCompleted()}>
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
          checked={this.props.todo.completed ? 'checked' : ''}
        />
        <input 
          type="text" 
          className="textBlock-disable" 
          ref={ref} 
          value={this.state.title}
          onChange={this.onChange}
          disabled
        />
        <button type="button" onClick={this.props.editTodo.bind(this, id, ref)} className="deleteBg">
          <FontAwesomeIcon className="editButton" icon={faEdit} />
        </button>
        <button type="button" onClick={this.props.deleteTodo.bind(this, id)} className="deleteBg">
          <FontAwesomeIcon className="deleteButton" icon={faTrash} />
        </button>
      </div>
    );
  }
}


export default MakeItem;