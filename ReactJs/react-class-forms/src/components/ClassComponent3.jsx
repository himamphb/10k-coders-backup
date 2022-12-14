import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
      },
      allUsers: [
        {
          username: "Murali",
          password: "krishna",
          email: "murali@gmail.com",
        },
        {
          username: "sam",
          password: "sundar",
          email: "sam@gmail.com",
        },
        {
          username: "kiran",
          password: "Kumar",
          email: "kiran@gmail.com",
        },
      ],
      editIndex: null,
    };
  }
  handleChange = (e) => {
    var newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson });
    // console.log(e)
    // console.log("Names :- ",e.target.name)
    // console.log("Values :- ",e.target.value)
  };
  addUser = () => {
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.person);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
      username: "",
      password: "",
      email: "",
      dateofbirth: "",
      height: "",
      weight: "",
    };
    this.setState({ person: newForm });
  };

  editUser = (usr, i) => {
    this.setState({ person: usr, editIndex: i });
  };

  deleteUser = (usr) => {
    var latestUsers = this.state.allUsers.filter(
      (myUser) => myUser.email !== usr.email
    );
    this.setState({ allUsers: latestUsers });
  };

  updateUser = () => {
    var latestUsers = [...this.state.allUsers];
    latestUsers[this.state.editIndex] = this.state.person;
    this.setState({ allUsers: latestUsers, editIndex: null });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">username : </label>
          <input
            type="text"
            name="username"
            value={this.state.person.username}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="Last Name :">password: </label>
          <input
            type="text"
            name="password"
            value={this.state.person.password}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">Email : </label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">dateofbirth : </label>
          <input
            type="text"
            name="dateofbirthl"
            value={this.state.person.dateofbirth}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">height : </label>
          <input
            type="text"
            name="height"
            value={this.state.person.height}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="">weight : </label>
          <input
            type="text"
            name="weight"
            value={this.state.person.weight}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />{" "}
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updateUser}
              className="btn btn-primary"
            >
              Update User
            </button>
          ) : (
            <button
              type="button"
              onClick={this.addUser}
              className="btn btn-primary"
            >
              Add User
            </button>
          )}
          {/* <button
            type="button"
            onClick={this.addUser}
            className="btn btn-primary"
          >
            Add User
          </button>
          <button
            type="button"
            onClick={this.updateUser}
            className="btn btn-primary"
          >
            Update User
          </button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>username</th>
              <th>password</th>
              <th>Email</th>
              <th>dateofbirth</th>
              <th>height</th>
              <th>weight</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => (
              <tr key={i}>
                <td>{usr.username}</td>
                <td>{usr.password}</td>
                <td>{usr.email}</td>
                <td>{usr.dateofbirth}</td>
                <td>{usr.height}</td>
                <td>{usr.weight}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(usr, i);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.deleteUser(usr);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
