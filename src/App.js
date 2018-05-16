import React, { Component } from 'react';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';
import './index.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'jiang lu',
      data:'111'
    }
  }
  fatherHandleClick(name,data){
    this.setState({
        name,
        data
    })
  }
  render() {
    return (
      <div className="App">
        <Header name = {this.state.name} fatherHandleClick={ this.fatherHandleClick.bind(this) }/>
        <p>{this.state.name}</p>
        <p>{this.state.data}</p>
        <hr />
        <Main />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;