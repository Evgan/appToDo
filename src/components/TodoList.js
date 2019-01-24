import React, { Component } from 'react'
import PropTypes from 'prop-types';
class TodoList extends Component {
    componentDidUpdate(){
        this.props.inputElement.current.focus();
    }

    static propTypes = {
        addItem: PropTypes.func.isRequired,
        inputElement: PropTypes.object.isRequired,
        currentItem: PropTypes.object.isRequired,
        handleInput: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref = {this.props.inputElement}
                            value = {this.props.currentItem.text}
                            onChange = {this.props.handleInput}
                        />
                        <button type="submit"> Add Task </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList