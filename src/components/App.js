import React, { Component } from 'react'
import '../App.css'
import ButtonHideShowDoneContainer from '../containers/ButtonHideShowDoneContainer'
import TodoListContainer from '../containers/TodoListContainer'
import TodoItemsCBContainer from '../containers/TodoItemsCBContainer'

class App extends Component {
  render() {
    console.log('>> App.js > render()')

    return (
      <div className="App">
        <TodoListContainer />
        <TodoItemsCBContainer />
        <ButtonHideShowDoneContainer />
      </div>
    )
  }
}

export default App
