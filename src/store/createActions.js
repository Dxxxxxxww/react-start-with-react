import * as types from './actionTypes'

export const getChangeInputAction = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value,
})

export const getAddTodoItemAction = () => ({
  type: types.ADD_TODO_ITEM,
})

export const getDeleteTodoItemAction = (value) => ({
  type: types.DELETE_TODO_ITEM,
  value,
})
