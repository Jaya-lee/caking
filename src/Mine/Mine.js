import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {Icon} from 'antd'
import ExitPop from './ExitPop'
import '../css/mine.css'
import img from '../img/kangaroo.png'
class Mine extends Component {
  constructor(){
    super()
    this.state={
      exit:false
    }
  }
  componentWillMount(){
    //title
    this.props.dispatch({type:'CHANGETITLE',title:'我的'})
}

  ensure(){
    this.setState({exit:!this.state.exit})
    this.props.dispatch({type:'USER',user:''})
    this.props.dispatch({type:'GITHUB_PIC',pic:''})
    localStorage.removeItem('userid')
  }
  cancel(){
    this.setState({
      exit:!this.state.exit
    })
  }
  render() {
    let pic=this.props.pic
    return(
      <div className="main">
        {this.props.user ?
          <div className='mine'>
            <div className='picture'>
              <img src={pic ? pic : img} alt=''/>
              <span>{this.props.user}</span>
            </div>
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
                <span>客服电话：10109777</span>
              </a>
            </li>
          </ul>
          <div onClick={this.cancel.bind(this)} className="ucenter-exit">退出登录</div>
          {this.state.exit ?
            <ExitPop ensure={this.ensure.bind(this)}
              cancel={this.cancel.bind(this)}
              val='退出后将无法查看当前订单，确定退出吗？'/> : null}
          </div>
          :
          <div　className='login'>
            <img src={img} alt=''/>
            <span>您还没有登录，请先登录哦～～</span>
            <Link to='/mine/sign'>登录</Link>
          </div>
        }
    </div>
    )
  }
}
const mapStoreToProps = (state) =>({
  user:state.user,
  pic:state.pic
})
export default connect(mapStoreToProps)(Mine)
