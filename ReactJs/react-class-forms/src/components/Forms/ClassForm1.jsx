import { Component } from "react";

class ClassForms1 extends Component {
  constructor() {
    super();
    this.state = {
      form1: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        message: "",
      },
      allusers: [],
      editIndex: null
    };
  }
  handlechange(e) {
    var copiedform = { ...this.state.form1 };
    copiedform[e.target.name] = e.target.value;
    this.setState({ form1: copiedform });
    // console.log(copiedform)
  }
  addUser = () => {
    var newdata = [...this.state.allusers];
    newdata.push(this.state.form1);
    this.setState({ allusers: newdata });
    console.log(newdata);
    this.clearUser();
  };
  clearUser = () => {
    var newuser = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      message: "",
    };
    this.setState({ form1: newuser });
  };
  editUser(user,i){
    this.setState({ form1: user, editIndex: i });
  }
  updateUser = () => {
    var latestallusers = [...this.state.allusers];
    latestallusers[this.state.editIndex] = this.state.form1;
    this.setState({ allusers: latestallusers, editIndex: null });
    this.clearUser() 
  };
  deleteUser = (user)=>{
    var latestnewuser = this.state.allusers.filter(
      (myuser) => myuser.email !== user.email
    );
    this.setState({ allusers: latestnewuser });
  }
  render() {
    return (
      <div>
        <br />
        <form>
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
            type="text"
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
          {this.state.editIndex !== null ? (<button type="button" className="btn btn-primary" onClick={this.updateUser}>
            Update user
          </button>):(<button
            type="button"
            className="btn btn-primary"
            onClick={this.addUser}
          >
            Add user
          </button>) }
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
                    type="button"
                    className="btn btn-secondary"
                    onClick={()=>{this.editUser(user)}}
                  >edit</button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      this.deleteUser(user);
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
}
export default ClassForms1;
