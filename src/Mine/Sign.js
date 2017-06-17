import React,{Component} from 'react'
import '../css/signin.css'

import {connect} from 'react-redux'
import {signIn,signUp} from '../redux/actions/showAction'

import {Icon} from 'antd'

class Sign extends Component{
  constructor(){
    super()
    this.handleClick=this.handleClick.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleClose=this.handleClose.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)

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
      again:''
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

  handleSubmit(e){
    e.preventDefault()
    let username = this.state.username
    let password = this.state.password
    let again = this.state.again
    let data={username,password}
    if(username.trim() && password.trim()){
        if(this.state.sign==='登录'){
              this.props.signIn(data)
            }else{
              this.props.signUp(data)
            }
      }else(alert('用户名，密码不允许为空'))
  }
  render(){
    let styleClose={
      fontSize:'0.16rem',
      color:'#aaa',
      marginLeft:'-0.2rem'
    }
    return(
      <div　className='main'>
          <form onSubmit={this.handleSubmit}>
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
                  type="text" placeholder="请输入用户名"  name='username'/>
                {this.state.username.length===0 ? null  : <Icon type="close-circle" style={styleClose} name='username' onClick={this.handleClose}/>}
              </li>
              <li>
                <Icon type="lock" style={{fontSize:'0.2rem',color:'#333'}} />
                <input onChange={this.handleChange} value={this.state.password}
                  type="password" placeholder="请输入密码" name='password'/>
                {this.state.password.length===0 ? null  : <Icon type="close-circle" style={styleClose} name='password'
                onClick={this.handleClose}/>}
              </li>
            {
              this.state.sign==='注册'　?
              <li>
                <Icon type="unlock" style={{fontSize:'0.2rem',color:'#333'}} />
                <input onChange={this.handleChange} value={this.state.again}
                  onFocus={this.handleOpen}
                  type="password" placeholder="再次输入密码" name='again'/>
                {this.state.again.length===0 ? null  : <Icon type="close-circle" style={styleClose} name='again'
                onClick={this.handleClose}/>}
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
  signin:state.signin,
  signup:state.signup
})
export default connect(mapStoreToProps,{signIn,signUp})(Sign)
