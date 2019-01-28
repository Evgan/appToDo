// ВОПРОС: В одном Action файле должет быть СТРОГО один Action?
// Или это не регламентируется и можно впихнуть несколько?

export const HIDE_SHOW_DONE = 'HIDE_SHOW_DONE'
export const HANDLE_DONE = 'HANDLE_DONE'
export const DELETE_ITEM = 'DELETE_ITEM'

export function hideShowDone(e) {
  return {
    type: HIDE_SHOW_DONE,
    payload: e,
  }
}
export function handleDone(e) {
  // Вызывается при нажатии на ЧБ задач
  return {
    type: HANDLE_DONE,
    payload: e.target.getAttribute('itemId'),
  }
}

export function deleteItem(e) {
  return {
    type: DELETE_ITEM,
    payload: e.target.getAttribute('itemId'),
  }
}
