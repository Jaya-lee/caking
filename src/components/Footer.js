import React from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import {Icon} from 'antd'
import '../css/footer.css'

class Footer extends React.Component{

  render(){
    let pathname=this.props.location.pathname
    return (
      <div className='footerbox'>

      {
          pathname==='/'|| pathname==='/order' || pathname==='/mine' ?
        <div className='footer'>

            <NavLink activeClassName='active' exact to='/'>
              <Icon type="home" style={{fontSize:'0.24rem'}}/>
              <span>首页</span>
            </NavLink>


            <NavLink activeClassName='active' to='/order' >
              <Icon type="file-text" style={{fontSize:'0.22rem'}}/>
              <span >订单</span>
            </NavLink>


            <NavLink activeClassName='active' to='/mine' >
              <Icon type="smile-o" style={{fontSize:'0.22rem'}}/>
              <span >我的</span>
            </NavLink>
        </div>

         : ''

      }
      </div>
    )
  }
}
export default withRouter(Footer)
