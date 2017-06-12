import React, { Component } from 'react'
import axios from 'axios'

import {connect} from 'react-redux'
import {showList,showSignUp} from '../redux/actions/showAction'

class SignUp extends Component {
  constructor() {
    super()
    this.signUp = this.signUp.bind(this)
  }

  signUp(e) {
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    axios.post('http://petapi.haoduoshipin.com/user/signup', data).then(res => {
      console.log(res.data);
    })
  }

  render() {
    return(
      <div className="signup-form">
        <div className="form-container">
          <form onSubmit={this.signUp}>
            <input ref={input => this.userName = input} type="text" placeholder="用户名" />
            <input ref={input => this.passWord = input} type="password" placeholder="密码" />
            <input type="password" placeholder="再次输入" />
            <div className='finish'>
              <input onClick={this.props.showList} className="none" value="取消" type="submit" />
              <input className="submit" value="注册" type="submit" />\
            </div>
          </form>
        </div>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({

})
export default connect(mapStoreToProps,{showList,showSignUp})(SignUp)
