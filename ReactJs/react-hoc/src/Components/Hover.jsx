import React, { Component } from 'react'
import HOC from './HOC.jsx';

 class Hover extends Component {
  render() {
    const {count , handleIncrement ,name} = this.props
    return (
      <div>
        <h2 onMouseOver={handleIncrement}>Hover on Me</h2>
        <h2>{name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default HOC(Hover)
