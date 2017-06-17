import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import ExitPop from './ExitPop'
import '../css/mine.css'
class Mine extends Component {
  constructor(){
    super()
    this.state={
      exit:false
    }
  }
  componentWillMount(){
      if (!localStorage.userid) {
        localStorage.userid = JSON.stringify([])
      }else if(JSON.parse(localStorage.userid).length){

      let userid = JSON.parse(localStorage.userid)[0]
      axios.get(`http://petapi.haoduoshipin.com/user/${userid}`)
      .then(res => this.props.dispatch({type:'CURRENTUSER',currentUser:res.data.user.username}))
    }
}
handleClick(){
  this.setState({
    exit:!this.state.exit
  })
}
  render() {
    return(
      <div className="main">
        <div className='mine'>
          <ul className="ucenter-content">
            <li>
              <Link to="/user/address">
              <Icon type="edit" />
              <span>收货地址管理</span>
              <Icon type="right" />
              </Link>
            </li>
            <li>
              <Link to="">
                <Icon type="red-envelope" />
                <span>商家代金券</span>
                <Icon type="right" />
              </Link>
            </li>
            <li>
              <Link to=''>
                <Icon type="mail" />
                <span>意见反馈</span>
                <Icon type="right" />
              </Link>

            </li>
            <li>
              <Link to=''>
                <Icon type="question-circle-o" />
                <span>常见问题</span>
                <Icon type="right" />
              </Link>
            </li>
            <li>
              <a href=''>
              <Icon type="phone" />
              <span>客服电话</span>
            </a>
            </li>
          </ul>
          {this.state.exit ? <ExitPop cancel={this.headerClick.bind(this)} ensure={this.ensure.bind(this)} val='退出后将无法查看当前订单，确定退出吗？'/> : null}
          <div onClick={this.handleClick.bind(this)} className="ucenter-exit">退出登录</div>
        </div>
    </div>
    )
  }
}
// const mapStoreToProps = (state) =>({
// })
export default connect(null)(Mine)
