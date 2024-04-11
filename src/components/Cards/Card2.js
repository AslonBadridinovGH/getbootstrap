import React, { Component } from 'react'

export default class Card2 extends Component {
  render() {
    return (
      
       <div className="card mb-4 shadow-sm">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">{this.props.title}</h4>
          </div>
          <div className="card-body">
              <h1 className="card-title pricing-card-title"> {this.props.price} <small className="text-muted">/ mo</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                  {this.props.arr.map((item, index) => <li key={index}>{item}</li> )}
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-outline-primary">{this.props.button}</button>
          </div>
      </div>

    )
  }
}
