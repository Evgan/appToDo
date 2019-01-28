import { combineReducers } from 'redux'
import { itemsReducer } from './items'
import { doneReducer } from './done'

export const rootReducer = combineReducers({
  items: itemsReducer,
  done: doneReducer,
})
