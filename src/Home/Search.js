import React ,{Component} from 'react'
import {Icon} from 'antd'

import {searchShop} from '../redux/actions/shopAction'
import {connect} from 'react-redux'

import '../css/search.css'
class Search extends Component{
  constructor(){
    super()
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
  }
  handleChange(){
    this.props.searchShop(this.mes.value)
  }
  handleClick(){
    this.props.history.push('/')
  }
  render(){
    console.log(this.mes);
    return(
      <div　className='home-search absolute'>
        <form onSubmit={this.handleSubmit} className='search-top'>
          <Icon type="rollback" style={{fontSize:'0.22rem'}} onClick={this.handleClick}/>
          <input className='mes' placeholder='请输入商家或商品信息'
          onChange={this.handleChange} ref={input =>this.mes=input}/>
          <input className='submit' type='submit' value='搜索'/>
        </form>
        {
          this.mes ?
          <ul className='shopbox main'>
            {
              this.props.shopList.map(item =>
                <li className='shop'
                  key={Math.random()}>{item.name}</li>
                )
              }
            </ul> :
            <div　className='hotbox main'>　
              <h4>热门搜索</h4>
              <div className='hot'>
                <span>如意山海饭店</span>
                <span>山茶花餐厅</span>
                <span>山花餐厅</span>
              </div>
            </div>
        }


      </div>
    )
  }
}
const mapStateToProps =(state)=>({
  shopList:state.shopList
})
export default connect(mapStateToProps,{searchShop})(Search)
