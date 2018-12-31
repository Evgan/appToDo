import React, {Component} from 'react';

class TodoItemsCB extends Component {
    createCB (item){
        return <div key={item.key}>
                    <input type="checkbox" defaultChecked={item.done} value={item.text}/>
                    <label>{item.text}</label>
                </div>
    }
    render() {
        const todoEntries = this.props.entries;
        const listCB = todoEntries.map(this.createCB);
        return (
            <div>
                {listCB}
            </div>
        )
    }
}

export default TodoItemsCB;