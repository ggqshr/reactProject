import React, { Component } from "react";
import { PropTypes } from "prop-types";

class TodoItem extends Component {
    //当一个组件从另一个组件接受参数，只要父组件的render的函数被重新执行了，他才会被执行
    componentWillReceiveProps(){
        
    }
    render(){
        const {content,test} = this.props;
        return(
            <div 
            onClick={this.props.handlerItemClick}
            >
            {test}--{content}
            </div>
        )
    }
}
TodoItem.propTypes={
    test:PropTypes.string,
    content:PropTypes.string,
    handlerItemClick:PropTypes.func,
    index:PropTypes.number
}
TodoItem.defaultProps ={
    test:'hello world',
}
export default TodoItem