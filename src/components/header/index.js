import React, { Component } from 'react';
import { Button } from 'antd';
class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="header">
        这是页面头部
        <Button type="primary">点我</Button>
      </div>
    );
  }
}

export default Header;