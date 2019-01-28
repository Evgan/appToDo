// В рамках изучения с помощью setTimeout имитируеум Асинхронный actioins
export const TASK_WILL_ADD = 'TASK_WILL_ADD'
export const TASK_DID_ADD = 'TASK_DID_ADD'
export function addTask(e) {
  return dispatch => {
    dispatch({
      type: TASK_WILL_ADD,
      payload: e,
    })

    setTimeout(() => {
      dispatch({ type: TASK_DID_ADD, payload: e })
    }, 500)
  }
}
