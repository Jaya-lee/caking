import React, { Component } from 'react';
import Header from './Header'
import Classify from './Classify'

import {allShop} from '../redux/actions/shopAction'
import {connect} from 'react-redux'

class Home extends Component{
  componentWillMount(){
    this.props.allShop()
  }
  render(){
    return (
      <div>
        <Header/>
        <Classify/>
        <ul className='shopbox'>
        {
          this.props.shopList.map(item =>
            <li className='shop' key={Math.random()}>{item.name}</li>
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
