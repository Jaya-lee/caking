import React, { Component } from 'react'

import Pop from './Pop'

import {connect} from 'react-redux'
import {showList} from '../redux/actions/showAction'

import {Icon} from 'antd'

class Mine extends Component {

  render() {
    return(
      <div className="header">
        <Icon type="rollback" style={{fontSize:'0.44rem'}}/>
        <div onClick={this.props.showList} className="more-button"></div>
        <Pop/>
      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
  popList:state.popList
})
export default connect(mapStoreToProps,{showList})(Mine)
