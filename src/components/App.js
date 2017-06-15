import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../redux/store'

import Header from './Header'
import Footer from './Footer'

import Home from '../Home/Home'
import Search from '../Home/Search'

import Order from '../Order/Order'

import Mine from '../Mine/Mine'
import SignIn from '../Mine/SignIn'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="app">
            <Header />
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/' component={Home}/>
            <Route path='/home/search' component={Search}/>
            <Route path='/order' component={Order}/>
            <Route path='/mine' component={Mine}/>
            <Route path='/mine/signin' component={SignIn}/>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
