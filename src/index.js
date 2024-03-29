import 'babel-polyfill'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './App'
import reducer from './redux/reducer'


let store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>,
     document.getElementById('root')
    );
