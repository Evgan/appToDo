import React, { Component } from 'react'
import { deleteItem, handleDone } from '../actions/DoneActions'
import { connect } from 'react-redux'
import TodoItemsCB from '../components/TodoItemsCB'

class TodoItemsCBContainer extends Component {
  render() {
    const { handleDoneAction, deleteItemAction } = this.props
    return (
      <TodoItemsCB
        entries={this.props.items.items}
        handleDoneAction={handleDoneAction}
        deleteItemAction={deleteItemAction}
        doneStatus={this.props.done.doneStatus}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    items: store.items,
    done: store.done,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    handleDoneAction: e => dispatch(handleDone(e)),
    deleteItemAction: e => dispatch(deleteItem(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItemsCBContainer)
