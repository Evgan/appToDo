import { TASK_ADD } from '../actions/AddTaskAction'
import {
  ITEM_DELETE,
  HANDLE_DONE,
  ITEM_WIll_DELETE,
} from '../actions/DoneActions'
import { getCurrentItem } from './currentItem'

export const initialState = {
  items: [],
}
export function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD:
      //ВОПРОС: Ну вот ХЗ можноли такделать: обменеваться данными между редюсерами? И вот таким способом?
      const newItem = getCurrentItem()

      if (newItem.text !== '') {
        const items = [...state.items, newItem]
        return {
          ...state,
          items: items,
        }
      }
      return state

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
