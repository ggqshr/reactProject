import React, { Component } from "react";
import { PropTypes } from "prop-types";

class TodoItem extends Component {
    //当一个组件从另一个组件接受参数，只要父组件的render的函数被重新执行了，他才会被执行
    //如果这个组件第一次存在于父组件中，不会执行
    // 如果这个组件已经存在于父组件中，会被执行
    componentWillReceiveProps(){
        
    }

    //当组件即将被从页面中剔除时会执行
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    shouldComponentUpdate(nextP,nextS){
        if(nextP.content !== this.props.content){
            return true;
        }
        else{
            return false;
        }
    }
    
    render(){
        const {content,test} = this.props;
        return(
            <div 
            onClick={this.props.handlerItemClick}
            >
            {content}
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