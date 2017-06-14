import React, { Component } from 'react';
import {Icon} from 'antd'
import '../css/header.css'
import {Link} from 'react-router-dom'


// import {hashHistory} from 'react-router'

class Header extends Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this)
  }
  
  handleClick(){
    // hashHistory.push('/home/search')
  }
  render(){
      return (
        <div className='home-header'>
          <div className='top'>
            <div  className='position'>
              <Icon type="environment"/>
              <span>金梦海湾一号</span>
              <Icon type="right" />
            </div>
            <form  className='search'>
              <Icon type="search" />
              <input onClick={this.handleClick} placeholder='请输入商家或者商品名称'/>
            </form>
          </div>

        </div>
    )
  }
}

export default Header
