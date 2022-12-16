const { Component } = require("react");

class User extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fname: "",
        lname: "",
        email: "",
        dateofbirth: "",
        mobile: "",
      },
      allusers: [],
      editIndex: null,
    };
  }
  handleChange(e) {
    var newobject = { ...this.state.person };
    newobject[e.target.name] = e.target.value;
    this.setState({ person: newobject });
    // this.setState({ fname: e.target.value });
    // console.log(e.target.value)
  }
  addUser = () => {
    var newdata = [...this.state.allusers];
    newdata.push(this.state.person);
    this.setState({ allusers: newdata });
    this.clearUser();
  };
  clearUser = () => {
    var newuser = {
      fname: "",
      lname: "",
      email: "",
      dateofbirth: "",
      mobile: "",
    };
    this.setState({ person: newuser });
  };
  editUser = (user, i) => {
    this.setState({ person: user, editIndex: i });
  };
  deleteUser = (user) => {
    var latestnewuser = this.state.allusers.filter(
      (myuser) => myuser.email !== user.email
    );
    this.setState({ allusers: latestnewuser });
  };
  updateUser = () => {
    var latestallusers = [...this.state.allusers];
    latestallusers[this.state.editIndex] = this.state.person;
    this.setState({ allusers: latestallusers, editIndex: null });
    this.clearUser();
  };
  render() {
    return (
      <div>
        <br />
        <form>
          <label htmlFor="">Firstname:</label>
          <input
            type="text"
            name="fname"
            value={this.state.person.fname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="">Lastname:</label>
          <input
            type="text"
            name="lname"
            value={this.state.person.lname}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="">email:</label>
          <input
            type="text"
            name="email"
            value={this.state.person.email}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="">Date of Birth:</label>
          <input
            type="text"
            name="dateofbirth"
            value={this.state.person.dateofbirth}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br></br>
          <br></br>
          <label htmlFor="">mobile:</label>
          <input
            type="text"
            name="mobile"
            value={this.state.person.mobile}
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <br />
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updateUser}
              className="btn btn-primary"
            >
              update user
            </button>
          ) : (
            <button
              type="button"
              onClick={this.addUser}
              className="btn btn-primary"
            >
              Add user
            </button>
          )}
          {/* <button type="button" onClick={this.addUser}>
            Add user
          </button>
         <br />
          <button type="button" onClick={this.addUser}>
            update user
          </button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>email</th>
              <th>date of birth</th>
              <th>mobile</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((user, i) => (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.dateofbirth}</td>
                <td>{user.mobile}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      this.editUser(user,i);
                    }}
                  >
                    edit
                  </button>
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
export default User;
