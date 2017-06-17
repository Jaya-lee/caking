import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'
class Header extends Component{
  constructor(){
    super()
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.push('/')
  }
  render(){
    let pathname=this.props.location.pathname
    return(
        <div className='header'>
          {
            pathname==='/'|| pathname==='/order' || pathname==='/mine' ? '' :
            <div className='header-sign'>
              <Icon type="rollback" style={{fontSize:'0.22rem'}} onClick={this.handleClick}/>
              <span>登录</span>
            </div>
          }
        </div>
    )
  }
}
export default withRouter(Header)
