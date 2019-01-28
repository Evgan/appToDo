import React, { Component } from 'react'
import { addTask } from '../actions/AddTaskAction'
import { changeInput } from '../actions/ChangeInputAction'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
class TodoListContainer extends Component {
  render() {
    console.log('>> TodoListContainer.js > render()')
    return (
      <TodoList
        addTask={this.props.addTaskAction}
        inputElement={this.inputElement}
        changeInput={this.props.changeInputAction}
        currentItem={this.props.items.currentItem}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    items: store.items,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTaskAction: e => dispatch(addTask(e)),
    changeInputAction: e => dispatch(changeInput(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListContainer)
