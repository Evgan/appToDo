import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk' // для ассинхронных actions
export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

// subscribe реагирует на изменение всего store
let previousItemsReduser = store.getState().items
store.subscribe(() => {
  // если редюсер items изменился то пишим его в localStoreg
  const { items } = store.getState()
  if (previousItemsReduser !== items) {
    console.log(items.items)
    window.localStorage.setItem('items', JSON.stringify(items.items))
    previousItemsReduser = items
  }
})
