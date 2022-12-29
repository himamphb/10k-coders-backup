import React from "react";
import { Component } from "react";

const HOC = (Originalomponent) => {
  class SampleComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <Originalomponent
          count={this.state.count}
          handleIncrement={this.handleIncrement}
           {...this.props}
        />
      );
    }
  }
  return SampleComponent;
};

export default HOC;