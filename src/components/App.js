import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../redux/store'


import Home from '../Home/Home'
import Order from '../Order/Order'
import Mine from '../Mine/Mine'

import Footer from './Footer'
import '../css/main.css'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/order' component={Order}/>
            <Route path='/mine' component={Mine}/>
            <Footer/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;