// Вынес сюда парочку Reducer для тестирования combineReducers

import { HIDE_SHOW_DONE } from '../actions/DoneActions'

const varsStatusBtnHideShowDone = {
  hide: { action: 'hide', label: 'Скрыть выполненные', nextState: 'show' },
  show: {
    action: 'show',
    label: 'Показать выполненные',
    nextState: 'hide',
  },
}

const initialState = {
  statusBtnHideShowDone: varsStatusBtnHideShowDone.hide,
  doneStatus: 'show',
}

export function doneReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_SHOW_DONE:
      return {
        ...state,
        statusBtnHideShowDone:
          varsStatusBtnHideShowDone[action.payload.nextState],
        doneStatus: action.payload.action,
      }
    default:
      return state
  }
}
