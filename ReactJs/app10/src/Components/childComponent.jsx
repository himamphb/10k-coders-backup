import { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super();
  }
  render() {
    const {message,handleChange}=this.props
    return (
      <div style={{ background: "lightgreen", color: "green", margin: "30px" }}>
        <button onClick={handleChange} style={{ color: "blue" }}>
          change message
        </button>
        <p>{message}</p>
      </div>
    );
  }
}
export default ChildComponent;
