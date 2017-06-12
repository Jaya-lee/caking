import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

import '../css/home-classify.css'
class Classify extends Component{
  render(){
    return (
      <div className='classify'>
        <div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
        </div>
        <div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
          <div className='cake'>
            <Link to='/home/cake'>
              <span className='icon'></span>
              <span>美食</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
export default Classify
