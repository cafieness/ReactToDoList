import React, { Component } from 'react';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class AddItem extends Component {
state = {
    title: ''
}

onSubmit = (e) => {
    e.preventDefault();
    this.setState({id: this.state.id + 1})
    if(this.state.title.replace(/\s/g,'') !== ''){
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
}

onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="addForm">
          <input
            type="text"
            className="addBlock"
            placeholder="Add something"
            value={this.state.title}
            onChange={this.onChange}
          />
          <button type="submit" className="deleteBg">
            <FontAwesomeIcon className="addButton" icon={faPlusCircle} />
          </button>
        </form>
      </div>
    );
  }
}


export default AddItem;