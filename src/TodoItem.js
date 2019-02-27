import React, { Component } from "react";
import { PropTypes } from "prop-types";

class TodoItem extends Component {
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