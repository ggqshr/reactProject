import { CHANGE_INPUTVALUE,ADD_ITEM,DELETE_ITEM } from './actionTypes'


export const changeInputValueAction = (data) => ({
    type: CHANGE_INPUTVALUE,
    data
})

export const addItemAction = () => ({
  type: ADD_ITEM,
})

export const deleteItemAction = (data) => ({
  type: DELETE_ITEM,
  data
})


