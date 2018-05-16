import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:this.props.name,
      data:'111'
    }
  }
  render() {
    return (
      <div className="header">
        这是页面头部
        {this.state.name}
        <button onClick={()=>{
          this.props.fatherHandleClick('123','aaa')
        }}>点我</button>
      </div>
    );
  }
}

export default Header;