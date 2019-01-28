export const INPUT_CH = 'CNAGE_INPUT'
export function changeInput(e) {
  return {
    type: INPUT_CH,
    payload: e,
  }
}
