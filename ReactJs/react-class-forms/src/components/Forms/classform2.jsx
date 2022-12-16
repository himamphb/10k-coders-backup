import { Component } from "react";

class ClassForms2 extends Component {
  constructor() {
    super();
    this.state = {
      studentDetails: {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        cgpa: "",
        upto: "",
        experience: "",
        website: "",
      },
      allusers: [],
      editIndex: null,
    };
  }
  handlechange(e) {
    var newuserdata = { ...this.state.studentDetails };
    newuserdata[e.target.name] = e.target.value;
    this.setState({ studentDetails: newuserdata });
    console.log(newuserdata);
  }
  addUser = () => {
    var newallusers = [...this.state.allusers];
    newallusers.push(this.state.studentDetails);
    this.setState({ allusers: newallusers });
    this.clearUser();
  };
  clearUser = () => {
    var clearform = {
      university: "",
      institute: "",
      branch: "",
      degree: "",
      status: "",
      cgpa: "",
      upto: "",
      experience: "",
      website: "",
    };
    this.setState({ studentDetails: clearform });
  };
  editUser = (user, i) => {
    this.setState({ studentDetails: user, editIndex: i });
  };
  deleteUser = (user) => {
    var latestallusers = this.state.allusers.filter(
      (myuser) => myuser.university !== user.university
    );
    this.setState({ allusers: latestallusers });
  };
  updateUser = () => {
    var updatedstudentdata = [...this.state.allusers];
    updatedstudentdata[this.state.editIndex] = this.state.studentDetails;
    this.setState({ allUsers: updatedstudentdata, editIndex: null });
    this.clearUser();
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <form>
          <label htmlFor="university">university:</label>
          <input
            type="text"
            name="university"
            value={this.state.studentDetails.university}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="institute">institute:</label>
          <input
            type="text"
            name="institute"
            value={this.state.studentDetails.institute}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="branch">branch:</label>
          <select
            name="branch"
            value={this.state.studentDetails.branch}
            onChange={(e) => {
              this.handlechange(e);
            }}
          >
            <option value="ece">ece</option>
            <option value="cse">cse</option>
            <option value="eee">eee</option>
            <option value="mech">mech</option>
          </select>
          <br />
          <label htmlFor="degree">degree:</label>
          <select
            name="degree"
            value={this.state.studentDetails.degree}
            onChange={(e) => {
              this.handlechange(e);
            }}
          >
            <option value="be">be</option>
            <option value="bcom">bcom</option>
            <option value="bsc">bsc</option>
            <option value="biotech">biotech</option>
          </select>
          <br />
          <label htmlFor="status">status:</label>
          <select
            name="status"
            value={this.state.studentDetails.status}
            onChange={(e) => {
              this.handlechange(e);
            }}
          >
            <option value="pursuing">pursuing</option>
            <option value="completed">completed</option>
          </select>
          <br />
          <label htmlFor="cgpa">cgpa:</label>
          <input
            type="number"
            name="cgpa"
            value={this.state.studentDetails.cgpa}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="upto">upto:</label>
          <input
            type="text"
            name="upto"
            value={this.state.studentDetails.upto}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="experience">experience:</label>
          <input
            type="number"
            name="experience"
            value={this.state.studentDetails.experience}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <label htmlFor="website">website:</label>
          <input
            type="url"
            name="website"
            value={this.state.studentDetails.website}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />{" "}
          <br />
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
            AddUser
          </button>
          <button
            type="button"
            onClick={this.updateUser}
            className="btn btn-primary"
          >
            UpdateUser
          </button> */}
        </form>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>university</th>
              <th>institute</th>
              <th>branch</th>
              <th>degree</th>
              <th>status</th>
              <th>cgpa</th>
              <th>upto</th>
              <th>experience</th>
              <th>website</th>
              <th>edit</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((user, i) => (
              <tr key={i}>
                <td>{user.university}</td>
                <td>{user.institute}</td>
                <td>{user.branch}</td>
                <td>{user.degree}</td>
                <td>{user.status}</td>
                <td>{user.cgpa}</td>
                <td>{user.upto}</td>
                <td>{user.experience}</td>
                <td>{user.website}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      this.editUser(user.i);
                    }}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    type="button"
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
export default ClassForms2;
