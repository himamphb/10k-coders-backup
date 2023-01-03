import React, { Component } from "react";
import { connect } from "react-redux";
import { addPersonAction } from "../Store/Actions";
import PersonsTable from "./PersonsTable";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
  }
  handleChange = (e) => {
    let newUser = { ...this.state };
    newUser[e.target.name] = e.target.value;
    this.setState(newUser);
  };
  addPerson = (person) => {
    this.props.addPerson(this.state);
    this.clearPersonForm();
  };
  clearPersonForm = () => {
    this.setState({
      fname: "",
      lname: "",
      email: "",
    });
  };
  render() {
    return (
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-4">
            <form>
              <label htmlFor="">First Name : </label>
              <input
                type="text"
                name="fname"
                value={this.state.fname}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <label htmlFor="Last Name :">Last Name : </label>
              <input
                type="text"
                name="lname"
                value={this.state.lname}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              />{" "}
              <br />
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </div>
              <br />
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  this.addPerson();
                }}
              >
                Add User
              </button>
            </form>
          </div>
          <div className="col-8">
            <PersonsTable />
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //   console.log(state);
  return {
    allPersons: state.persons,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addPerson: (person) => dispatch(addPersonAction(person)), // From Where this funtion getting Dispatch Method
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Person);
