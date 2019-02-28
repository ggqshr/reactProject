import React, { Component } from 'react'
import "antd/dist/antd.css"
import { Input, Button, List } from 'antd';
import store from './store'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
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
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handlerStoreChange() {
      this.setState(store.getState())
  }
  handleClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleDelete(index){
      let action = getDeleteItemAction(index)
      store.dispatch(action)
  }
}
