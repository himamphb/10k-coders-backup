import { Component } from "react";
import axios from "axios";

export default class Forms1 extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      form1: {
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      },
      allusers: [],
      editIndex: null,
    };
  }
  handlechange = (e) => {
    var copiedform = { ...this.state.form1 };
    copiedform[e.target.name] = e.target.value;
    this.setState({ form1: copiedform });
  };

  addUser = () => {
    axios({
      method: "post",
      url: "http://localhost:3001/form1",
      data: this.state.form1,
      headers: {
        "Content-Type": "application/json",
      },
    });
    var neweachusers = [...this.state.allusers];
    neweachusers.push(this.state.form1);
    this.setState({ allusers: neweachusers });
    this.clearUser();
  };

  clearUser = () => {
    var newuser = {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      message: "",
    };
    this.setState({ form1: newuser });
  };

  editUser(user, i) {
    this.setState({ form1: user, editIndex: i });
  }

  updateUser = () => {
    var number = this.state.editIndex + 1;
    axios({
      method: "put",
      url: "http://localhost:3001/form1/" + number,
      data: this.state.form1,
    });
    var newupdates = [...this.state.allusers];
    newupdates[this.state.editIndex] = this.state.form1;
    this.setState({ allusers: newupdates, editIndex: null });
    this.clearUser();
  };

  deleteUser = (user, i) => {
    var number = i + 1;
    // console.log(number);
    // console.log(user , id);
    axios.delete("http://localhost:3001/form1/" + number).then((res) => {
      this.componentDidMount();
    });
  };
  render() {
    return (
      <div>
        <br />
        <form>
          <label htmlFor="">ID</label>
          <br />
          <input
            type="text"
            name="id"
            value={this.state.form1.id}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.form1.name}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.form1.username}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">email:</label>
          <input
            type="text"
            name="email"
            value={this.state.form1.email}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.form1.password}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Confirm Password:</label>
          <input
            type="text"
            name="confirmpassword"
            value={this.state.form1.confirmpassword}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          <label htmlFor="">Message:</label>
          <input
            type="text"
            name="message"
            value={this.state.form1.message}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.updateUser}
            >
              Update user
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.addUser}
            >
              Add user
            </button>
          )}
          {/* <button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}
          >
            Add user
          </button>
          // <button type="button" className="btn btn-primary" onClick={this.updateUser}>
          //   Update user
          // </button>
          <hr /> */}
        </form>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>email</th>
              <th>password</th>
              <th>confirmpassword</th>
              <th>message</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((user, i) => (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.confirmpassword}</td>
                <td>{user.message}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      this.editUser(user, i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.deleteUser(user,i);
                    }}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  async componentDidMount() {
    let response = await axios.get("http://localhost:3001/form1");
    // console.log(response);
    this.setState({ allusers: response.data });
  }
}
