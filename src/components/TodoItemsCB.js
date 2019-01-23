import React, {Component} from 'react';
import iconDelete from './img/icon_delete.png';

class TodoItemsCB extends Component {
    createCB = (item) =>{
        // Сперва проверим не нажатали кнопка "Скрыть выполненные", если да, то не генирируем отмеченные ЧБ
       if(this.props.doneStatus === '' || this.props.doneStatus === 'show' || (this.props.doneStatus === 'hide' && item.done === false)){
          const classNameLabel = item.done ? 'labelCB labelCB-t' : 'labelCB';
           return <div className="TodoItemCB" key={item.key}>
                       <input type="checkbox"
                              itemID={item.key}
                              defaultChecked={item.done}
                              value={item.text}
                              onClick={this.onClick}
                              id={item.key}
                       />
                       <label for={item.key} className={classNameLabel}>{item.text}</label>
                           <img src={iconDelete}
                                alt=''
                                className='imgDelete'
                                onClick={this.onClickDelete}
                                itemID={item.key}/>
                   </div>
        }
        return '';
    }
    onClickDelete = e => {
        this.props.handleDelete(e);
    }
    onClick = e => {
        this.props.handleDone(e);
    }
    render() {
        const todoEntries = this.props.entries;
        const listCB = todoEntries.map(this.createCB);
        return (
            <div className='theList'>
                {listCB}
            </div>
        )
    }
}


export default TodoItemsCB;