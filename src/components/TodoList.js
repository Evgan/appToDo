import React, { Component } from 'react'
import PropTypes from 'prop-types'
class TodoList extends Component {
  constructor() {
    super()
    this.inputElement = React.createRef()
  }

  componentDidUpdate() {
    this.inputElement.current.focus()
  }

  static propTypes = {
    addTask: PropTypes.func.isRequired,
    currentItem: PropTypes.object.isRequired,
    changeInput: PropTypes.func.isRequired,
  }

  addItem = e => {
    e.preventDefault() // нужно для того что бы страница не презагружалась при нажатии на кнопку addTask
    this.props.addTask(e)
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
              ref={this.inputElement}
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
