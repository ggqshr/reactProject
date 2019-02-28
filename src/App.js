import React, { Component, Fragment } from 'react'
import "./style.css";
import { CSSTransition } from 'react-transition-group'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            <Fragment>
                <CSSTransition in={this.state.show} timeout={1000} classNames='fade' unmountOnExit onEntered={(el)=>{el.style.color="red"}} appear={true}>
                    <div >
                        hello world
                    </div>
                </CSSTransition>
                <button onClick={() => this.handleToggle()}>
                    toggle
                </button>
            </Fragment>
        )
    }
    handleToggle() {
        this.setState(
            (prev) => {
                return {
                    show: !prev.show,
                }
            }
        )
    }
}
