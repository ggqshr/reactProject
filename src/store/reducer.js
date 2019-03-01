import { CHANGE_INPUTVALUE, ADD_ITEM, DELETE_ITEM } from "./actionTypes";

const initialState = {
    inputValue: '',
    list: ['ggq']
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUTVALUE:
            {
                const newState = JSON.parse(JSON.stringify(state))
                newState.inputValue = action.data;
                return newState
            }
        case ADD_ITEM: {
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
        case DELETE_ITEM:{
            const newState = JSON.parse(JSON.stringify(state))
            newState.list.splice(action.data,1)
            return newState
        }
        default:
            return state
    }
}

