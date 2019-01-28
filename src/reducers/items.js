import { INPUT_CH } from '../actions/ChangeInputAction'
import { TASK_ADD } from '../actions/AddTaskAction'
import {
  ITEM_DELETE,
  HANDLE_DONE,
  ITEM_WIll_DELETE,
} from '../actions/DoneActions'

const initialItem = { text: '', key: '', done: '', delayDelete: '' }

export const initialState = {
  items: [],
  currentItem: initialItem,
}
export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD:
      const newItem = state.currentItem
      if (newItem.text !== '') {
        const items = [...state.items, newItem]
        return {
          ...state,
          items: items,
          currentItem: initialItem,
          itemWillAdd: '',
        }
      }
      return state

    case INPUT_CH:
      const itemText = action.payload
      const currentItem = {
        ...state.currentItem,
        text: itemText,
        key: Date.now(),
      }
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

    case ITEM_WIll_DELETE:
      const itemIdWillDelete = action.payload.itemId
      const itemsAfterWillDelete = state.items.map(value => {
        if (value.key.toString() === itemIdWillDelete.toString()) {
          value.delayDelete = action.payload.delay / 1000
        }
        return value
      })
      return { ...state, items: itemsAfterWillDelete }

    case ITEM_DELETE:
      const itemIdDelete = action.payload
      const itemsAfterDeleteItem = state.items.filter(value => {
        return value.key.toString() !== itemIdDelete.toString()
      })
      return { ...state, items: itemsAfterDeleteItem }

    default:
      return state
  }
}
