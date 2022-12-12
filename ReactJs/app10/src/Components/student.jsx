const { Component } = require("react");

class Studentinfo extends Component {
  constructor() {
    super();
    this.state = {
      welcome: "welcome to reactjs training",
      studentDetails: {
        fname: "himam",
        lname: "basha",
        email: "himamphb124@gmail.com",
      },
      subjects: ["html", "css", "javascript", "ReactJs"],
      showImages: false,
      images: [
        "https://th.bing.com/th/id/R.7eaf51b1efbac224a826255f61b1e827?rik=JMPMIDInJXVErg&riu=http%3a%2f%2fwww.emagidla.com%2fwp-content%2fuploads%2f2013%2f10%2fhtml5.png&ehk=qIJZyOCy32GmZWiNV%2b3EOE3Tj29u1%2feU0WkK1nTJiqE%3d&risl=&pid=ImgRaw&r=0",
        "https://i.pinimg.com/originals/d5/b9/3b/d5b93bad3c10cc5b92b47e4678598548.jpg",
        "https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png"
      ],
    };
  }
  showInformation = () =>{
    let newdetails = {...this.state.studentDetails,email:"himambasha0@gmail.com"}
     this.setState({showImages:true,studentDetails:newdetails})
  }
  render() {
    return (
      <div>
        <h2>{this.state.welcome}</h2>
        <ul>
          {Object.values(this.state.studentDetails).map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        <ul>
          {this.state.subjects.map((val, i) => {
            return <li key={i}>{val}</li>;
          })}
        </ul>
        <div>
            <button onClick={this.showInformation}>
                click on the button
            </button>
            <hr />
          {this.state.showImages &&
            this.state.images.map((val, i) => {
              return (
                <img
                  src={val}
                  key={i}
                  style={{ height: 100, width: 100 }}
                  alt=""
                />
              );
            })}

          {/* {this.state.images.map((val,i)=>{ return <img src={val} key={i} style={{height:100,width:100}} alt=""/>})} */}

          {/* {this.state.showImages ? this.state.images.map((val,i) => { return <img src={val} key={i} style={{height:100,width:100}} alt=""/> }) :<p>there are no images</p>} */}
        </div>
      </div>
    );
  }
}
export default Studentinfo;
