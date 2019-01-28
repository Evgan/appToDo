import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus()
  }

  static propTypes = {
    addItem: PropTypes.func.isRequired,
    inputElement: PropTypes.object.isRequired,
    currentItem: PropTypes.object.isRequired,
    changeInput: PropTypes.func.isRequired,
  }

  addItem = e => {
    e.preventDefault() // нужно для того что бы страница не презагружалась при нажатии на кнопку addTask
    this.props.addItem(e)
  }
  changeInput = e => {
    this.props.changeInput(e.target.value)
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.changeInput}
            />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}

export default TodoList
