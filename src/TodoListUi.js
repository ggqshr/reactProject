import React from 'react'
import { Input, Button, List } from 'antd';
//函数时组件就是无状态组件 没有状态，只负责显示
const TodoListUi = (props)=>{
    return (
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
        <div>
          <Input placeholder="todo info" 
          style={{ width: '300px', marginRight: '10px' }} 
          value={props.inputValue} 
          onChange={props.handleOnChange} />
          <Button type='primary' onClick={props.handleClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (<List.Item onClick={()=>props.handleDelete(index)}>{item}</List.Item>)}
        />
      </div>
    )
}


// export default class TodoListUi extends Component {
//   render() {
//     return (
//         <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input placeholder="todo info" 
//           style={{ width: '300px', marginRight: '10px' }} 
//           value={props.inputValue} 
//           onChange={props.handleOnChange} />
//           <Button type='primary' onClick={props.handleClick}>提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '300px' }}
//           bordered
//           dataSource={props.list}
//           renderItem={(item,index) => (<List.Item onClick={()=>props.handleDelete(index)}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodoListUi