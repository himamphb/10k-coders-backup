const { Component } = require("react");

export class ClassConstructorState extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "himam basha",
      person: {
        fname: "PHB",
        lname: "PHIMAMBasha",
        email: "himamphb124@gmail.com",
      },
      users: ["himam", "phb", "basha"],
    };
  }
  render() {
    return <div>
        <h1>{this.state.fullName}</h1>
        <ul>
            {Object.values(this.state.person).map((val) => {
            return <li>{val}</li>;
            })}
        </ul>
        <ul>
            {this.state.users.map((values) => {
            return <li>{values}</li>;
            })}
        </ul>
        </div>
  }
}
