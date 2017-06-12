import React, { Component } from 'react';
import Header from './Header'
import Classify from './Classify'
class Home extends Component{
  render(){
    return (
      <div>
        <Header/>
        <Classify/>
      </div>
    )
  }
}
export default Home
