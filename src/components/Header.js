import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'
class Header extends Component{

  render(){
    let pathname=this.props.location.pathname
    return(
        <div className='header'>
          {
            pathname==='/'|| pathname==='/order' || pathname==='/mine' ? '' :
            <Icon type="rollback" style={{fontSize:'0.22rem'}} onClick={this.handleClick}/>
          }
        </div>
    )
  }
}
export default withRouter(Header)
