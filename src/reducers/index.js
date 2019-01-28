import { combineReducers } from 'redux'
import { itemsReducer } from './items'
import { doneReducer } from './done'
import { currentItemReducer } from './currentItem'

export const rootReducer = combineReducers({
  items: itemsReducer,
  done: doneReducer,
  currentItem: currentItemReducer,
})
