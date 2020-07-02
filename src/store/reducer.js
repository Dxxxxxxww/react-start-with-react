import * as types from './actionTypes'

const defaultState = {
  inputValue: '123',
  list: [1, 2],
}

export default (state = defaultState, action) => {
  if (action.type === types.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === types.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type === types.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }
  console.log(action)
  return state
}
