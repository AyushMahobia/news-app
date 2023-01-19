import React, { Component } from 'react'
import loading from './loading.gif'
export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="container text-center my-5 ">
          <img src={loading} alt="loading" />
          <h6 className='text-light'>Please wait...</h6>
        </div>
      </div>
    )
  }
}
