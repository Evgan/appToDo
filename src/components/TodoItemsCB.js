import React, { Component } from 'react'
import iconDelete from './img/icon_delete.png'
import PropTypes from 'prop-types'

class TodoItemsCB extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    handleDoneAction: PropTypes.func.isRequired,
    deleteItemAction: PropTypes.func.isRequired,
    doneStatus: PropTypes.string.isRequired,
  }
  createCB = item => {
    // Сперва проверим не нажатали кнопка "Скрыть выполненные", если да, то не генирируем отмеченные ЧБ
    if (
      this.props.doneStatus === '' ||
      this.props.doneStatus === 'show' ||
      (this.props.doneStatus === 'hide' && item.done === false)
    ) {
      const classNameLabel = item.done ? 'labelCB labelCB-t' : 'labelCB'
      return (
        <div className="TodoItemCB" key={item.key}>
          <label className={classNameLabel}>
            <input
              type="checkbox"
              itemID={item.key}
              defaultChecked={item.done}
              value={item.text}
              onClick={this.onClick}
              id={item.key}
            />
            {item.text}
          </label>
          {item.delayDelete === '' ? (
            <img
              src={iconDelete}
              alt=""
              className="imgDelete"
              onClick={this.onClickDelete}
              itemID={item.key}
            />
          ) : (
            <div>
              <small style={{ color: 'red' }}>
                Задача будет удалена через {item.delayDelete} секунды
              </small>
            </div>
          )}
        </div>
      )
    }
    return ''
  }
  onClickDelete = e => {
    this.props.deleteItemAction(e)
  }
  onClick = e => {
    this.props.handleDoneAction(e)
  }

  render() {
    const todoEntries = this.props.entries
    const listCB = todoEntries.map(this.createCB)
    return <div className="theList">{listCB}</div>
  }
}

export default TodoItemsCB
