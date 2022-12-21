import axios from "axios";
import { Component } from "react";

export default class Forms5 extends Component {
  constructor() {
    super();
    this.state = {
      form5: {
        id: "",
        employee: "",
        email: "",
        company: "",
        domain: "",
        experience: "",
      },
      allEmployers: [],
      editIndex: null,
    };
  }
  handlechange = (e) => {
    var newobj = { ...this.state.form5 };
    newobj[e.target.name] = e.target.value;
    this.setState({ form5: newobj });
  };
  adduser = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/form5",
      data: this.state.form5,
      headers: {
        "Content-Type": "application/json",
      },
    });
    var newdata = [...this.state.allEmployers];
    newdata.push(this.state.form5);
    this.setState({ allEmployers: newdata });
    this.clearuser();
  };
  clearuser = () => {
    var newuser = {
      id: "",
      employee: "",
      email: "",
      company: "",
      domain: "",
      experience: "",
    };
    this.setState({ form5: newuser });
  };
  edituser = (user, i) => {
    this.setState({ form5: user, editIndex: i });
  };
  updateuser = () => {
    var number = this.state.editIndex + 1;
    axios({
      method: "put",
      url: "http://localhost:3005/form5/" + number,
      data: this.state.form5,
    });
    var newdata = [...this.state.allEmployers];
    newdata[this.state.editIndex] = this.state.form5;
    this.setState({ allEmployers: newdata, editIndex: null });
    this.clearuser();
  };
  deleteuser = (user, i) => {
    var number = i + 1;
    axios.delete("http://localhost:3005/form5/" + number).then((res) => {
      this.componentDidMount();
    });
  };
  render() {
    return (
      <div>
        <br />
        <br />
        <form>
          <label htmlFor="">ID</label>
          <input
            type="text"
            name="id"
            value={this.state.form5.id}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Employee</label>
          <input
            type="text"
            name="employee"
            value={this.state.form5.employee}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br></br>
          <br />
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.form5.email}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Company</label>
          <input
            type="text"
            name="company"
            value={this.state.form5.company}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Domain working</label>
          <input
            type="text"
            name="domain"
            value={this.state.form5.domain}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="">Experience</label>
          <input
            type="text"
            name="experience"
            value={this.state.form5.experience}
            onChange={(e) => {
              this.handlechange(e);
            }}
          />
          <br />
          {this.state.editIndex !== null ? (
            <button
              type="button"
              onClick={this.updateuser}
              className="btn btn-primary"
            >
              updateuser
            </button>
          ) : (
            <button
              type="button"
              onClick={this.adduser}
              className="btn btn-primary"
            >
              Adduser
            </button>
          )}
        </form>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>EMPLOYEE</th>
              <th>EMAIL</th>
              <th>COMPANY</th>
              <th>DOMAIN</th>
              <th>EXPERIENCE</th>
              <th>EDIT</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allEmployers.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.employee}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>{user.domain}</td>
                <td>{user.experience}</td>
                <td>
                  {" "}
                  <button
                    type="button"
                    onClick={this.edituser(user, i)}
                    className="btn btn-warning"
                  >
                    edit
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    type="button"
                    onClick={this.deleteuser(user,i)}
                    className="btn btn-secondary"
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
    let response = await axios.get("http://localhost:3005/form5/");
    // console.log(response);
    this.setState({ allEmployers: response.data });
  }
}
