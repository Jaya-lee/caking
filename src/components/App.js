import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../redux/store'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

import Home from '../Home/Home'
import Search from '../Home/Search'
import Class from '../Home/Class'

import Order from '../Order/Order'

import Mine from '../Mine/Mine'
import Sign from '../Mine/Sign'

class App extends Component {
    componentWillMount(){
    //判断是否登录并展示个人信息
      if (!localStorage.userid) {
        localStorage.userid = JSON.stringify([])
      }else if(JSON.parse(localStorage.userid).length){
      let userid = JSON.parse(localStorage.userid)[0]
      axios.get(`http://petapi.haoduoshipin.com/user/${userid}`)
      .then(res =>
        {store.dispatch({type:'USER',user:res.data.user.username})
        //从github获取头像
        axios.get(`https://api.github.com/users/${res.data.user.username}`)
        .then(res => {
          store.dispatch({type:'GITHUB_PIC',pic:res.data.avatar_url})
        })
      })
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="app">
            <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/home/search' component={Search}/>
              <Route path='/home/class/:id' component={Class}/>
              <Route path='/order' component={Order}/>
              <Route path='/mine/sign' component={Sign}/>
              <Route path='/mine' component={Mine}/>
            </Switch>
            <Footer/>
          </div>
      </Router>
      </Provider>
    )
  }
}

export default App
