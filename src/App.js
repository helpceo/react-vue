import 'normalize.css'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import axios from './axios'

import Main from './components/main'
import Footer from './components/footer'
import Header from './components/header'
import './App.css'
import Reduxing from './components/reduxing'

class App extends Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    //axios的例子
    axios.get('/parts/api/v1/parts')
    .then(res => {
      console.log(res.data)
    })
  }
  render() {
    
    return (
      <Router>
        <div className="App">
          <Header />
          <hr/>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
          <Route exact path="/" component={Header}/>
          <Route path="/about" component={Footer}/>
          <Route path="/topics" component={Main}/>
          <hr/>
          <Reduxing />
          <hr/>
          <Footer />
        </div>
    </Router>
    )
  }
}

export default App;