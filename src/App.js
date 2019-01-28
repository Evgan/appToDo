import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import TodoList from './components/TodoList.js'
import TodoItemsCB from './components/TodoItemsCB'
import ButtonHideShowDone from './components/ButtonHideShowDone'
import { deleteItem, handleDone, hideShowDone } from './actions/DoneActions'
import { addTask } from './actions/AddTaskAction'
import { changeInput } from './actions/ChangeInputAction'

class App extends Component {
  constructor() {
    super()
    this.inputElement = React.createRef()
    this.state = {
      items: [],
      currentItem: { text: '', key: '', done: '' },
      doneStatus: '',
    }
  }

  render() {
    // console.log(' >> App.js > render()')

    const { currentItem, items, itemWillAdd } = this.props.items
    const { statusBtnHideShowDone, doneStatus } = this.props.done
    const {
      hideShowDoneAction,
      handleDoneAction,
      deleteItemAction,
    } = this.props

    // Кнопка "Скрыть/Показать выполненные" будет появлятся только тогда когда имеется ходябы один отмечанный ЧБ:
    const divButtonHideShowDone = items.some(value => value.done) ? ( // some вернёт true если хотябы у одного item value.done=true
      <ButtonHideShowDone
        //hideShowDone={this.hideShowDone}
        statusBtnHideShowDone={statusBtnHideShowDone}
        hideShowDone={hideShowDoneAction}
      />
    ) : (
      ''
    )

    return (
      <div className="App">
        <TodoList
          addItem={this.props.addTaskAction}
          inputElement={this.inputElement}
          changeInput={this.props.changeInputAction}
          currentItem={currentItem}
        />
        {itemWillAdd !== '' ? <small>{itemWillAdd}</small> : ''}

        <TodoItemsCB
          entries={items}
          handleDone={handleDoneAction}
          handleDelete={deleteItemAction}
          doneStatus={doneStatus}
        />
        {divButtonHideShowDone}
      </div>
    )
  }
}

const mapStateToProps = store => {
  // console.log(store)
  return {
    items: store.items,
    done: store.done,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    hideShowDoneAction: e => dispatch(hideShowDone(e)),
    addTaskAction: e => dispatch(addTask(e)),
    changeInputAction: e => dispatch(changeInput(e)),
    handleDoneAction: e => dispatch(handleDone(e)),
    deleteItemAction: e => dispatch(deleteItem(e)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
