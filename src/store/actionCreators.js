import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from "./actionTypes";


export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    inputValue: value
})


export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index: index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})
//使用thunk
// export const getTodoItem = () => {
//     return (dispatch) => {
//         axios.defaults.withCredentials = true
//         axios.get('http://127.0.0.1:5000/list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data)
//             dispatch(action)
//         })
//     }
// }
export const getINitList = ()=>({
    type:GET_INIT_LIST,
})