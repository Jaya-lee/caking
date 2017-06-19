import React ,{Component} from 'react'
import {connect} from 'react-redux'
class Class extends Component{
  componentWillMount(){
    this.props.dispatch({type:'CHANGETITLE',title:this.props.location.name})
  }
  render(){
    console.log(this.props.location.name);
    return(
      <div>vdxg</div>
    )
  }
}
export default connect(null)(Class)
