import React, { Component } from 'react';
import {Icon} from 'antd'
import {withRouter} from 'react-router-dom'

class Header extends Component{
  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this)
  }

  handleClick(){
    this.props.history.push('/home/search')
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
              <Icon type="search"/>
              <input onClick={this.handleClick} placeholder='炸鸡'/>
            </form>
          </div>

        </div>
    )
  }
}

export default withRouter(Header)
