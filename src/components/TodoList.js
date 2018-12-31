import React, { Component } from 'react'
class TodoList extends Component {
    constructor(){
        super();
        console.log('call constructor in TodoList');
    }
    componentDidUpdate(){
        console.log('call componentDidUpdate in TodoList');
        // this.props.inputElement.current.focus();
    }

    render() {
        console.log('call render in TodoList');
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.props.addItem}>
                        <input
                            placeholder="Task"
                            ref-setter = {this.props.currentItem}
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