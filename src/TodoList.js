import React, { Component, Fragment } from 'react'
import "./style.css"
import TodoItem from "./TodoItem"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["学习"],
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
                        onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleButtonClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <TodoItem
                                        content={item}
                                        index={index}
                                        handlerItemClick={() => this.handlerItemClick(index)}
                                    />
                            )

                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value,
        })
    }
    handleButtonClick() {
        this.setState(
            {
                list: [...this.state.list, this.state.inputValue],
                inputValue: ""
            }
        )
    }
    handlerItemClick(index) {
        const list = this.state.list.slice();
        list.splice(index, 1);
        this.setState(
            {
                list: list
            }
        )
    }
}
export default TodoList