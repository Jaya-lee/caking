import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

class Classify extends Component{
  render(){
    return (
      <div className='classify'>

          <Link to='/home/cake'>
            <span className='icon'></span>
            <span>美食</span>
          </Link>
          <Link to='/home/cake'>
            <span className='icon'></span>
            <span>美食</span>
          </Link>
          <Link to='/home/cake'>
            <span className='icon'></span>
            <span>美食</span>
          </Link>
          <Link to='/home/cake'>
            <span className='icon'></span>
            <span>美食</span>
          </Link>
        </div>

    )
  }
}
export default Classify
