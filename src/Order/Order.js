import React ,{Component} from 'react'
import {connect} from 'react-redux'
import img from '../img/kangaroo.png'
import {Link} from 'react-router-dom'
class Order extends Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGETITLE',title:'订单'})

  }
  render(){
    return (
      <div className='main'>
        {
          this.props.user ?
          <div>Order</div>

          : <div　className='login'>
              <img src={img} alt=''/>
              <span>您还没有登录，请先登录哦～～</span>
              <Link to='/mine/sign'>登录</Link>
            </div>
        }
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
  user:state.user
})
export default connect(mapStoreToProps)(Order)
