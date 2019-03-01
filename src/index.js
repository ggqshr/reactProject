import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './store'

const App = (
    //是内部的所有组件都能够获取到store的数据，把store提供给标签内的所有组件
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
