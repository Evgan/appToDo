import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList.js'
import TodoItemsCB from "./components/TodoItemsCB";
import ButtonHideShowDone from "./components/ButtonHideShowDone";

class App extends Component {

    constructor(){
        super();
        this.inputElement = React.createRef();
        this.state = {
            items: [],
            currentItem: {text:'', key: '', done: ''},
            doneStatus: '',
        }
    }
    hideShowDone = e =>{
        // Вызывается при нажатии на кнопку "Скрыть/Показать выполненные"
        this.setState({doneStatus: e});
    }

    handleDelete = e =>{
        const itemId = e.target.getAttribute('itemId');
        const items = this.state.items.filter(value => {
            return value.key.toString() !== itemId.toString();
        });
        this.setState({items: items});
    }

    handleDone = e =>{
        // Вызывается при начатии на ЧБ задач
        const itemId = e.target.getAttribute('itemId');
        const items = this.state.items.map(value => {
            if(value.key.toString() === itemId.toString()){
                value.done = !value.done;
            }
            return value;
        });
        this.setState({items: items});
    }


    handleInput = e =>{
        // Вызывается при вводе текста в инпут
        const itemText = e.target.value;
        const currentItem = { text: itemText, key: Date.now(), done: false};
        this.setState({currentItem,});
    }


    addItem = e => {
        // Вызывается при нажатии кнопки "Add Task"
        e.preventDefault(); // нужно для того что бы страница не презагружалась при нажатии на кнопку addTask
        const newItem = this.state.currentItem;
        if(newItem.text !== ''){
            const items = [...this.state.items, newItem];
            this.setState({
               items: items,
                currentItem: {text:'', key: ''}
            });
        }
    }
  render() {
        // Кнопка "Скрыть/Показать выполненные" будет появлятся только тогда когда имеется ходябы один отмечанный ЧБ:
      const divButtonHideShowDone =
          this.state.items.some(value => value.done) // some вернёт true если хотябы у одного item value.done=true
              ? <ButtonHideShowDone hideShowDone = {this.hideShowDone}/>
              : '';

    return (
      <div className="App">
        <TodoList
            addItem={this.addItem}
            inputElement={this.inputElement}
            handleInput={this.handleInput}
            currentItem={this.state.currentItem}
        />

         <TodoItemsCB
             entries={this.state.items}
             handleDone={this.handleDone}
             handleDelete={this.handleDelete}
             doneStatus={this.state.doneStatus}
         />

          {divButtonHideShowDone}

      </div>
    );
  }
}

export default App;
