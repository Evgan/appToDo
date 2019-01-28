export const TASK_ADD = 'TASK_ADD'
export function addTask(e) {
  return {
    type: TASK_ADD,
    payload: e,
  }
}
