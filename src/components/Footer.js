import React from 'react';
import {NavLink} from 'react-router-dom'
import {Icon} from 'antd'
import '../css/footer.css'
class Footer extends React.Component{
  render(){
    return (
      <div className='footer'>
        <div className='footer-home'>
          <NavLink activeClassName='active' exact to='/'>
            <Icon type="home" style={{fontSize:'0.4rem'}}/>
            <span>首页</span>
          </NavLink>
        </div>
        <div className='footer-order'>
          <NavLink activeClassName='active' to='/order'>
            <Icon type="file-text" style={{fontSize:'0.36rem'}}/>
            <span>订单</span>
          </NavLink>
        </div>
        <div className='footer-mine'>
          <NavLink activeClassName='active' to='/mine'>
            <Icon type="smile-o" style={{fontSize:'0.36rem'}}/>
            <span>我的</span>
          </NavLink>
        </div>
      </div>
    )
  }
}
export default Footer
