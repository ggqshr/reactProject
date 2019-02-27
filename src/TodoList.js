import React, { Component, Fragment } from 'react'
import "./style.css"
import TodoItem from "./TodoItem"


// function TodoItem(props){
//     return (
//         <div 
//             onClick={props.handlerItemClick}
//             >
//             {props.content}
//             </div>
//     )
// }

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: [],
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="inputarea">输入内容</label>
                    <input
                        id="inputarea"
                        value={this.state.inputValue}
                        className='input'
                        onChange={(e) => this.handleInputChange(e)} />
                    <button onClick={() => this.handleButtonClick()}>提交</button>
                </div>
                <ul>
                    {this.getItem()}
                </ul>
            </Fragment>
        )
    }
    getItem() {
        return this.state.list.map((item, index) => {
            return (
                <TodoItem
                    content={item}
                    index={index}
                    handlerItemClick={() => this.handlerItemClick(index)}
                />
            )
        })
    }
    handleInputChange(e) {
        let value = e.target.value;
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    handleButtonClick() {
        this.setState((prev) => {
            return {
                list: [...prev.list, prev.inputValue],
                inputValue: ""
            }
        })
    }
    handlerItemClick(index) {
        this.setState(
            (prev) => {
                let list = this.state.list.slice();
                list.splice(index, 1)
                return {
                    list: list
                }
            }
        )
    }
}
export default TodoList