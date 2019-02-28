import React, { Component } from 'react'
import { Input, Button, List } from 'antd';


export default class TodoListUi extends Component {
  render() {
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input placeholder="todo info" 
          style={{ width: '300px', marginRight: '10px' }} 
          value={this.props.inputValue} 
          onChange={this.props.handleOnChange} />
          <Button type='primary' onClick={this.props.handleClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (<List.Item onClick={()=>this.props.handleDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
  }
}
