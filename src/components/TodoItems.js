import React, {Component} from 'react';

class TodoItems extends Component {
    createTaks(item){
        return <li key={item.key}>{item.text}</li>
    }
    render() {
        const todoEntries = this.props.entries;
        const listItems = todoEntries.map(this.createTaks);
        return <ul className="theList">{listItems}</ul>;
    }
}

export default TodoItems;