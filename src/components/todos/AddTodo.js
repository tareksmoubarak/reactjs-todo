import React, { Component } from "react";
import PropTypes from "prop-types";

class AddTodo extends Component {
    state = {
        title: ''
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add Todo ..." style={{flex: '10', padding: '5px'}} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
            </form>
        )
    }

    onChange = (e) => {
        // THIS
        // this.setState({ title: e.target.value });
        // OR THIS
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
}

AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
