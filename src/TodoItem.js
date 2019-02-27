import React, { Component } from "react";

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
export default TodoItem