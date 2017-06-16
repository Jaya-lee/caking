import React,{Component} from 'react'
import axios from 'axios'
import '../css/signin.css'

import {connect} from 'react-redux'
import {showList,showSignIn} from '../redux/actions/showAction'

import {Icon} from 'antd'

class SignIn extends Component{
  constructor(){
    super();
    this.logIn=this.logIn.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.handleOpen=this.handleOpen.bind(this)

    this.state={
      sign:'登录',
      username:'',
      password:'',
      again:''
    }
  }

  handleClick(e){
    let newSign=e.target.innerText
    this.setState({
      sign:newSign,
      username:'',
      password:'',
      again:'',
      opacity:0

    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleClose(e){
    this.setState({
      [e.target.getAttribute('name')]:''
    })
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
    let styleClose={
      fontSize:'0.16rem',
      color:'#aaa',
      marginLeft:'-0.2rem',
      opacity:this.state.opacity
    }
    return(
      <div>
          <form onSubmit={this.logIn} className='main'>
            <div className='tab'>
              <span className={this.state.sign==='登录'　? 'active' : ''}
                onClick={this.handleClick}>登录</span>
              <span className={this.state.sign==='注册'　? 'active' : '' }
                onClick={this.handleClick}>注册</span>
            </div>
            <div className='form-box'>
              <li>
                <Icon type="user"  style={{fontSize:'0.2rem',color:'#333'}}/>
                <input onChange={this.handleChange} value={this.state.username}
                  onFocus={this.handleOpen}
                  type="text" placeholder="请输入用户名"  name='username'/>
                {this.state.username.length===0 ? null  : <Icon type="close-circle" style={styleClose} name='username' onClick={this.handleClose}/>}
              </li>
              <li>
                <Icon type="lock" style={{fontSize:'0.2rem',color:'#333'}} />
                <input onChange={this.handleChange} value={this.state.password}
                  onFocus={this.handleOpen}
                  type="password" placeholder="请输入密码" name='password'/>
                <Icon type="close-circle" style={styleClose} name='password'
                onClick={this.handleClose}/>
              </li>
            {
              this.state.sign==='注册'　?
              <li>
                <Icon type="unlock" style={{fontSize:'0.2rem',color:'#333'}} />
                <input onChange={this.handleChange} value={this.state.again}
                  onFocus={this.handleOpen}
                  type="password" placeholder="再次输入密码" name='again'/>
                <Icon type="close-circle" style={styleClose} name='again'
                onClick={this.handleClose}/>
              </li> : ''

              }

              <div className='finish'>
                <input className="submit" value={this.state.sign} type="submit" />
                  {this.state.sign==='登录' ? <a>忘记密码</a> : ''}
              </div>
              <div className='footer sign-footer'>
                <span>说明:注册/登录说明您已同意<a href="http://i.meituan.com/about/terms">《美团用户协议》</a>
                </span>
              </div>
            </div>
          </form>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
})
export default connect(mapStoreToProps,{showList,showSignIn})(SignIn)
