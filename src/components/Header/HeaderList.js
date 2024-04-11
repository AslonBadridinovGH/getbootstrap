import React, { Component } from 'react'

export default class HeaderList extends Component {
  render() {
    return (
        <a className="p-2 text-dark text-decoration-none" href="#">{this.props.data}</a>    
    )
  }
}
