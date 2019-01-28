// ВОПРОС: В одном Action файле должет быть СТРОГО один Action?
// Или это не регламентируется и можно впихнуть несколько?

// В рамках изучения с помощью setTimeout имитируеум Асинхронный actioins

export const HIDE_SHOW_DONE = 'HIDE_SHOW_DONE'
export const HANDLE_DONE = 'HANDLE_DONE'

export const ITEM_WIll_DELETE = 'ITEM_WIll_DELETE'
export const ITEM_DELETE = 'ITEM_DELETE'

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
  const itemId = e.target.getAttribute('itemId')
  const delay = 3000
  return dispatch => {
    dispatch({
      type: ITEM_WIll_DELETE,
      payload: { itemId: itemId, delay: delay },
    })

    setTimeout(() => {
      dispatch({
        type: ITEM_DELETE,
        payload: itemId,
      })
    }, delay)
  }
}
