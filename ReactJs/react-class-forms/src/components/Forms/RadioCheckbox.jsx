import { Component } from "react";

export default class RadioCheckbox extends Component {
  constructor() {
    super();
    this.state = {
      gender: "",
      skills: [],
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    if (e.target.name == "gender") {
      this.setState({ gender: e.target.value });
    } else {
      var allcheckboxes = [...this.state.skills];
      if (allcheckboxes.length == 0) {
        allcheckboxes.push(e.target.value);
      } else {
        let check = allcheckboxes.find((cb) => cb == e.target.value);
        
        if (check) {
          allcheckboxes = allcheckboxes.filter((cb) => cb != e.target.value);
        } else {
          allcheckboxes.push(e.target.value);
        }
      }
      this.setState({ skills: allcheckboxes });
    }
  };
  getData = () => {
    console.log(this.state);
  };
  clearValues = () => {
    this.setState({
      gender: "",
      skills: [],
    });
  };
  render() {
    return (
      <div className="container">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value={"Male"}
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked={this.state.gender == "Male"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="gender"
            value={"Female"}
            onChange={(e) => {
              this.handleChange(e);
            }}
            checked={this.state.gender == "Female"}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="html"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.skills.indexOf("html") > -1}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              html
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="css"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.skills.indexOf("css") > -1}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              css
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="javascript"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.skills.indexOf("javascript") > -1}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              javascript
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="reactjs"
              onChange={(e) => {
                this.handleChange(e);
              }}
              checked={this.state.skills.indexOf("reactjs") > -1}
            />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              reactjs
            </label>
          </div>
          <button
            onClick={this.getData}
            className="btn btn-primary"
            type="button"
          >
            get data
          </button>
          <button onClick={this.clearValues} className="btn btn-primary">
            Clear Values
          </button>
        </div>
      </div>
    );
  }
}
