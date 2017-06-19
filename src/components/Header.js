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
            pathname==='/'|| pathname==='/order' || pathname==='/mine' ?
              <span>{this.props.title}</span>
             :
            <div className='header-sign'>
              <Icon type="rollback" onClick={this.handleClick}/>
              <span>{this.props.title}</span>
            </div>
          }
        </div>
    )
  }
}
const mapStoreToProps=(state)=>({
  title:state.title
})
export default connect(mapStoreToProps)(withRouter(Header))
