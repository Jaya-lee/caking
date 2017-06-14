import React ,{Component} from 'react'
import {Icon} from 'antd'

import {searchShop} from '../redux/actions/shopAction'
import {connect} from 'react-redux'

import '../css/search.css'
class Search extends Component{
  constructor(){
    super();
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
  }
  handleChange(){
    this.props.searchShop(this.mes.value)
  }
  render(){
    console.log(this.props.shopList);
    return(
      <div　className='home-search'>
        <form onSubmit={this.handleSubmit} className='search-top'>
          <Icon type="left" style={{fontSize:'0.3rem'}}/>
          <input className='mes' placeholder='请输入商家或商品信息'
          onChange={this.handleChange} ref={input =>this.mes=input}/>
          <input className='submit' type='submit' value='搜索'/>
        </form>

        <ul className='shopbox'>
        {
          this.props.shopList.map(item =>
            <li className='shop'
              key={Math.random()}>{item.name}</li>
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
export default connect(mapStateToProps,{searchShop})(Search)
