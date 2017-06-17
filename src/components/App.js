import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../redux/store'

import Header from './Header'
import Footer from './Footer'

import Home from '../Home/Home'
import Search from '../Home/Search'

import Order from '../Order/Order'

import Mine from '../Mine/Mine'
import Sign from '../Mine/Sign'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router >
          <div className="app">
            <Header />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/home/search' component={Search}/>
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
