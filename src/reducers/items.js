import { INPUT_CH } from '../actions/ChangeInputAction'
import { TASK_DID_ADD, TASK_WILL_ADD } from '../actions/AddTaskAction'
import { DELETE_ITEM, HANDLE_DONE } from '../actions/DoneActions'
export const initialState = {
  items: [],
  currentItem: { text: '', key: '1', done: '' },
  itemWillAdd: '',
}
export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_WILL_ADD:
    case TASK_DID_ADD:
      const newItem = state.currentItem
      if (newItem.text !== '') {
        //
        if (action.type === TASK_WILL_ADD) {
          return {
            ...state,
            itemWillAdd:
              'Задача "' +
              newItem.text +
              '" бует добавлена через 5 секунд.(Учим thunk - для ассинхронных actions)',
          }
        } else {
          const items = [...state.items, newItem]
          return {
            ...state,
            items: items,
            currentItem: { text: '', key: '1', done: '' },
            itemWillAdd: '',
          }
        }
      }
      return state

    case INPUT_CH:
      const itemText = action.payload
      const currentItem = { text: itemText, key: Date.now(), done: false }
      return { ...state, currentItem: currentItem }

    case HANDLE_DONE:
      // Вызывается при нажатии на ЧБ задач
      const itemId = action.payload
      const items = state.items.map(value => {
        if (value.key.toString() === itemId.toString()) {
          value.done = !value.done
        }
        return value
      })
      return { ...state, items: items }

    case DELETE_ITEM:
      const itemIdDelete = action.payload
      const itemsAfteDeleteItem = state.items.filter(value => {
        return value.key.toString() !== itemIdDelete.toString()
      })
      return { ...state, items: itemsAfteDeleteItem }

    default:
      return state
  }
}
