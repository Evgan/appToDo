import { INPUT_CH } from '../actions/ChangeInputAction'
import { TASK_ADD } from '../actions/AddTaskAction'

export const itemDefault = { text: '', key: '', done: '', delayDelete: '' }

export const initialState = {
  currentItem: itemDefault,
}

//ВОПРОС: Ну вот ХЗ можноли такделать: обменеваться данными между редюсерами? И вот таким способом?
export function getCurrentItem() {
  return valueCurrentItem
}
var valueCurrentItem

export function currentItemReducer(state = initialState, action) {
  switch (action.type) {
    case TASK_ADD:
      return { ...state, currentItem: itemDefault }

    case INPUT_CH:
      const itemText = action.payload
      const currentItem = {
        ...state.currentItem,
        text: itemText,
        key: Date.now(),
      }
      valueCurrentItem = currentItem //ВОПРОС: Ну вот ХЗ можноли такделать: обменеваться данными между редюсерами? И вот таким способом?
      return { ...state, currentItem: currentItem }

    default:
      return state
  }
}
