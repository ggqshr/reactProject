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
    //挂载时页面第一个被挂载的时候执行
    //在组件将要被挂载时调用
    componentWillMount() {
        console.log("componentWillMount");
    }

    //页面挂载hi走执行
    componentDidMount() {
        console.log("componentDidMount");
    }

    //组建被更新之前，会被自动调用
    //用来控制是否更新
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    //如果shouldComponentUpdate返回true才会执行
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    //更新之后会执行
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    //在更新props时执行
    componentWillReceiveProps(){
        
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
                        onChange={(e) => this.handleInputChange(e)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={() => this.handleButtonClick()}>提交</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
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

        //使用e.target的当时获取节点
        // let value = e.target.value;
        let value = this.input.value
        this.setState(() => {
            return {
                inputValue: value
            }
        })
    }
    handleButtonClick() {
        // setState是一个异步函数,第一个函数可以更新statue，第二个函数是一个回调函数，在执行完更新之后，可以回调一个函数
        this.setState((prev) => {
            return {
                list: [...prev.list, prev.inputValue],
                inputValue: ""
            }
        },
            () => {
                console.log(this.ul.querySelectorAll('div').length)
            }
        )
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