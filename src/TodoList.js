import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input, Button, List } from 'antd';
import store from './store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes'


export default class TodoList extends Component {
  constructor() {
    super();
    console.log(store.getState())
    this.state = store.getState();
    store.subscribe(() => { this.handlerStoreChange() })
  }

  render() {
    return (
      <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input placeholder="todo info" style={{ width: '300px', marginRight: '10px' }} value={this.state.inputValue} onChange={(e) => this.handleOnChange(e)} />
          <Button type='primary' onClick={()=>this.handleClick()}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={()=>this.handleDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }

  handleOnChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      inputValue: e.target.value
    }
    store.dispatch(action)
  }
  handlerStoreChange() {
      this.setState(store.getState())
  }
  handleClick(){
    const action = {
      type:ADD_TODO_ITEM,
    }
    store.dispatch(action)
  }
  handleDelete(index){
      let action = {
        type:DELETE_TODO_ITEM,
        index:index
      }
      store.dispatch(action)
  }
}
