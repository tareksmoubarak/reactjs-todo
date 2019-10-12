import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { id, title } = this.props.todo;
    return (
        <div style={this.getStyle()}>
            <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {/* {this.props.todo.title} */}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </p>
        </div>
    )
  }

//   Below will return cannot read property props of undefined => `this` it can be fixed by using the function as i'm using it below or by binding this to the method executed onChange: `onChange={this.markComplete.bind(this)}
//   markComplete(e){
//       console.log(this.props);
//   }

  getStyle = () => {
    return{
        textDecoration: this.props.todo.completed ? 'line-through' : '',
        padding: '10px',
        borderBottom: '2px #ccc dotted',
        backgroundColor: '#121212',
        color: '#fff',
    }
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#ff0000',
    color: '#ffffff',
    border: 'none',
    height: '20px',
    width: '20px',
    verticalAlign: 'middle',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
