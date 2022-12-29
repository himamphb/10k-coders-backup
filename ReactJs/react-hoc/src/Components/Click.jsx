import React, { Component } from "react";
import HOC from "./HOC.jsx";


class Click extends Component {
    
  render() {
    const {count , handleIncrement,name} = this.props
    return <div>
        <button onClick={handleIncrement}>Click</button>
        <h2>{name} clicked {count} times !!</h2>
    </div>;
  }
}
export default HOC(Click)
