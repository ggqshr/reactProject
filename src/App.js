import React, { Component, Fragment } from 'react'
import "./style.css";
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
                <div className={this.state.show ? "show" : "hide"}>
                    hello world
                </div>
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
                    show:!prev.show,
                }
            }
        )
    }
}
