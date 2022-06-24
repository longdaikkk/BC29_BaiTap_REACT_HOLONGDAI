import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <div className='row'>
            <div className='col-12 bg-dark'>
                <Header></Header>
            </div>
            <div className='col-12'>
                <Body></Body>
            </div>
            <div className='col-12'>
                <Footer></Footer>
            </div>
        </div>
      </div>
    )
  }
}
