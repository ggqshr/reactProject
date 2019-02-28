import React, { Component, Fragment } from 'react'
import "./style.css";
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <Fragment>
                <TransitionGroup >
                    {

                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition timeout={1000} classNames="fade" unmountOnExit appear={true} key={index}>
                                    <div >
                                        {item}
                                    </div>
                                </CSSTransition>
                            )
                        })

                    }
                </TransitionGroup>
                <button onClick={() => this.handleAddItem()}>
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
    handleAddItem() {
        this.setState((prev) => {
            return {
                list: [...prev.list, 'item']
            }
        })
    }
}
