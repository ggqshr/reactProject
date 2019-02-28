import React, { Component } from 'react'
import "antd/dist/antd.css"
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUi from './TodoListUi'
import axios from 'axios';

export default class TodoList extends Component {
  constructor() {
    super();
    console.log(store.getState())
    this.state = store.getState();
    store.subscribe(() => { this.handlerStoreChange() })
  }

  render() {
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        handleOnChange={(e) => this.handleOnChange(e)}
        handleClick={() => this.handleClick()}
        handleDelete={(index) => this.handleDelete(index)}
        list={this.state.list}
      />
    )
  }

  componentDidMount = () => {
    axios.defaults.withCredentials = true
    axios.get('http://127.0.0.1:5000/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data)
      store.dispatch(action)
    })
  }


  handleOnChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handlerStoreChange() {
    this.setState(store.getState())
  }
  handleClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleDelete(index) {
    let action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}
