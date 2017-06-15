import React,{Component} from 'react'
import axios from 'axios'

import {Tabs,Icon} from 'antd'
const TabPane = Tabs.TabPane;

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
      <div className="absolute">
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </div>
          <div className="header">
            {/* <form onSubmit={this.logIn}>
              <input ref={input => this.userName = input} type="text" placeholder="用户名" />
              <input ref={input => this.passWord = input} type="password" placeholder="密码" />
              <div className='finish'>
                <input onClick={this.props.showList} className="none" value="取消" type="submit" />
                <input className="submit" value="登录" type="submit" />
              </div>
            </form> */}
            <Icon type="rollback" style={{fontSize:'0.44rem'}}/>
        </div>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
})
export default connect(mapStoreToProps,{showList,showSignIn})(SignIn)
