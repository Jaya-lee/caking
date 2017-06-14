import React,{Component} from 'react'
import axios from 'axios'

import {connect} from 'react-redux'
import {showList,showSignIn} from '../redux/actions/showAction'

class SignIn extends Component{
  constructor(){
    super();
    this.logIn=this.logIn.bind(this)
  }
  logIn(e){
    e.preventDefault()
    let data = {
      username: this.userName.value,
      password: this.passWord.value
    }
    axios.post('http://petapi.haoduoshipin.com/user/signin',data)
    .then(res => alert(res.data.msg))
  }
  render(){
    console.log(this.userName);
    return(
      <div className="signup-form">
          <div className="form-container">
            <form onSubmit={this.logIn}>
              <input ref={input => this.userName = input} type="text" placeholder="用户名" />
              <input ref={input => this.passWord = input} type="password" placeholder="密码" />
              <div className='finish'>
                <input onClick={this.props.showList} className="none" value="取消" type="submit" />
                <input className="submit" value="登录" type="submit" />
              </div>
            </form>
        </div>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
})
export default connect(mapStoreToProps,{showList,showSignIn})(SignIn)
