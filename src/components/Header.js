import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'
import {connect} from 'react-redux'
class Header extends Component{
  constructor(){
    super()
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.props.history.goBack()
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
          <span>{this.props.title}</span>
        </div>
    )
  }
}
const mapStoreToProps=(state)=>({
  title:state.title
})
export default connect(mapStoreToProps)(withRouter(Header))
