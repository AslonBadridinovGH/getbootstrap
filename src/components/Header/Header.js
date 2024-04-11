import React, { Component } from 'react'
import HeaderList from './HeaderList'

export default class Header extends Component {
  render() {

    return (
      <div className="d-flex flex-column align-items-center flex-md-row p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">     
          <h5 className="my-0 me-md-auto fw-normal">Company name</h5>       
            <nav className="my-2 my-md-0 me-md-3 fs-5">
                {
                  this.props.dataProducts.map(
                    (dataProduct, index) =>                     
                      <HeaderList  key={index} data = {dataProduct}/>                   
                    )
                }
            </nav>
          <a className="btn btn-outline-primary" href="#">Sign up</a>
      </div> 
    )
  }
}
