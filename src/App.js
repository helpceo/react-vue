import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import './index.css';
class App extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={Header}/>
          <Route path="/about" component={Footer}/>
          <Route path="/topics" component={Main}/>
        </div>
    </Router>
    )
  }
}

export default App;