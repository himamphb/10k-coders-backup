import { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component {
  constructor() {
    super();
    this.state = {
      welcome: "welcome to the 10k coders of murali sir class",
      profile: {
        fname: "himam",
        lname: "basha",
      },
    };
  }
  changeMessage = () => {
    this.setState({ welcome: "i am a changed message from parent" });
  };
  render() {
    const { welcome } = this.state;
    return (
      <ChildComponent message={welcome} handleChange={this.changeMessage} />
    );
  }
}
export default ParentComponent;
