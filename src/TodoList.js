import React from 'react'
import { connect } from 'react-redux'
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actionCreater'


const TodoList = (props) => {
    const { inputValue, ChangeInputvalue, handleClick, handleDelete } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={ChangeInputvalue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    props.list.map((item, index) => {
                        return (
                            <li key={index} onClick={() => handleDelete(index)}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


// class TodoList extends Component {
//     render() {
//         const { inputValue, ChangeInputvalue, handleClick, handleDelete } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={ChangeInputvalue} />
//                     <button onClick={handleClick}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         this.props.list.map((item, index) => {
//                             return (
//                                 <li key={index} onClick={() => handleDelete(index)}>{item}</li>
//                             )
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
//连接的规则


const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        ChangeInputvalue(e) {
            const action = changeInputValueAction(e.target.value)
            dispatch(action)
        },
        handleClick() {
            const action = addItemAction()
            dispatch(action)
        },
        handleDelete(index) {
            const action = deleteItemAction(index)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
