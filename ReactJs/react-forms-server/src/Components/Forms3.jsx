import React, { Component } from "react";
import axios from "axios";
export default class Forms3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        id: "",
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
      },
      allUsers: [
        // {
        //   username: "Murali",
        //   password: "krishna",
        //   email: "murali@gmail.com",
        // },
        // {
        //   username: "sam",
        //   password: "sundar",
        //   email: "sam@gmail.com",
        // },
        // {
        //   username: "kiran",
        //   password: "Kumar",
        //   email: "kiran@gmail.com",
        // },
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
    axios({
      method: "post",
      url: "http://localhost:3003/form3",
      data: this.state.person,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUsers];
    newAllUsers.push(this.state.person);
    this.setState({ allUsers: newAllUsers });
    this.clearForm();
  };
  clearForm = () => {
    var newForm = {
      id: "",
      username: "",
      password: "",
      email: "",
      dateofbirth: "",
      height: "",
      weight: "",
    };
    this.setState({ person: newForm });
  };

  editUser(usr, i) {
    this.setState({ person: usr, editIndex: i });
  }

  deleteUser = (usr, i) => {
    var number = i + 1;

    axios.delete("http://localhost:3003/form3/" + number).then((res) => {
      this.componentDidMount();
    });
  };

  updateUser = () => {
    var number = this.state.editIndex + 1;
    axios({
      method: "put",
      url: "http://localhost:3003/form3/" + number,
      data: this.state.person,
    });
    var latestUsers = [...this.state.allUsers];
    latestUsers[this.state.editIndex] = this.state.person;
    this.setState({ allUsers: latestUsers, editIndex: null });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">ID</label>
          <br />
          <input
            type="text"
            name="id"
            value={this.state.person.id}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
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
                      this.deleteUser(usr,i);
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
