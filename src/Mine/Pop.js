import '../css/pop.css'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {showList,showSignUp,showSignIn} from '../redux/actions/showAction'

import SignUp from './SignUp'
import SignIn from './SignIn'

class Pop extends Component {
  constructor() {
    super()
  }

  render() {
    console.log(this.props);
    return(
      <div
      style={this.props.popList ? { display: 'block' } : { display: 'none' }} className="bottom-list">
        {this.props.signUp ? <SignUp /> : ''}
        {this.props.signIn ? <SignIn /> : ''}
        <div className="login-actions">
          <ul>
            <li onClick={this.props.showSignUp}>注册</li>
            <li onClick={this.props.showSignIn}>登录</li>
            <li onClick={this.props.showList}>取消</li>
          </ul>
        </div>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
  popList:state.popList,
  signUp:state.signUp,
  signIn:state.signIn
})
export default connect(mapStoreToProps,{showList,showSignUp,showSignIn})(Pop)
