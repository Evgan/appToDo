import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList.js'
import TodoItemsCB from "./components/TodoItemsCB";
import ButtonHideShowDone from "./components/ButtonHideShowDone";

class App extends Component {

    constructor(){
        console.log('call constructor() in App');
        super();
        this.state = {
            items: [],
            currentItem: {text:'', key: '', done: ''}
        }
    }
    hideShowDone = e =>{
        console.log('call hideShowDone() in App');
        console.log(e);
    }


    handleInput = e =>{
        console.log('call handleInput()');
        // console.log(e.target.value);
        const itemText = e.target.value;
        const currentItem = { text: itemText, key: Date.now(), done: false};
        this.setState({currentItem,});
        console.log(this.state);
    }
    addItem = e => {
        console.log('call addItem()');
        e.preventDefault(); // нужно для того что бы страница не презагружалась при нажатии на кнопку addTask
        const newItem = this.state.currentItem;
        if(newItem.text !== ''){
            console.log(newItem);
            const items = [...this.state.items, newItem];
            this.setState({
               items: items,
                currentItem: {text:'', key: ''}
            });
        }
    }
  render() {
      console.log('call render() in App');
    return (
      <div className="App">
        <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
        />
          <ButtonHideShowDone
              hideShowDone={this.hideShowDone}
          />
         {/*<TodoItems entries={this.state.items}/>*/}
         <TodoItemsCB entries={this.state.items}/>
      </div>
    );
  }
}

export default App;
