import React, { Component } from 'react';
import { Button } from 'antd'
class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const {text, onChangeText, onButtonClick} = this.props;
    return (
      <div className="header">
        <div>  
          <h1 onClick={onChangeText}> {text} </h1>
          <Button type="primary" onClick={onButtonClick}>点我</Button>
        </div>
      </div>
    );
  }
}

export default Header;