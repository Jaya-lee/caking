 import React, { Component } from 'react';
import Header from './Header'
import Classify from './Classify'

import '../css/home.css'

import {allShop} from '../redux/actions/shopAction'
import {connect} from 'react-redux'

class Home extends Component{
  componentWillMount(){
    this.props.allShop()
  }
  render(){
    return (
      <div className='main'>
        <Header/>
        <Classify/>
        <div className='shoptop'><span>附近商家</span></div>
        <ul className='shopbox'>
        {
          this.props.shopList.map(item =>
            <li className='shop' key={Math.random()}>
              <img alt=''/>
              <span>{item.name}</span>
            </li>
          )
        }
      </ul>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  shopList:state.shopList
})
export default connect(mapStateToProps,{allShop})(Home)
