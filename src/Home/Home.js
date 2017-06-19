 import React, { Component } from 'react';
import Header from './Header'
import Classify from './Classify'

import '../css/home.css'

import {allShop} from '../redux/actions/shopAction'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import store from '../redux/store'
class Home extends Component{

  componentWillMount(){
    store.dispatch({type:'CHANGETITLE',title:'首页'})
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
            <Link to={{pathname:`/home/class/${item._id}` ,name:item.name,id:item._id}}
            className='shop' key={Math.random()}>
              <img src={item.poster} alt=''/>
              <span>{item.name}</span>
            </Link>
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
