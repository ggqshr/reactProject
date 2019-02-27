import React, { Component } from "react";
import { PropTypes } from "prop-types";

class TodoItem extends Component {
    render(){
        return(
            <div 
            onClick={this.props.handlerItemClick}
            >
            {this.props.content}
            </div>
        )
    }
}
TodoItem.propTypes={
    content:PropTypes.string,
    handlerItemClick:PropTypes.func,
    index:PropTypes.string
}
export default TodoItem