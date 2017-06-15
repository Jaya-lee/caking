import React, { Component } from 'react'


import {connect} from 'react-redux'
import {showList} from '../redux/actions/showAction'

class Mine extends Component {

  render() {
    return(
      <div className="main">
      未登录

      </div>
    )
  }
}
const mapStoreToProps = (state) =>({
  popList:state.popList
})
export default connect(mapStoreToProps,{showList})(Mine)
