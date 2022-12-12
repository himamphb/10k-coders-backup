import { Component } from "react";

class ChildComponent extends Component{
    constructor(props){
        super()
    }
    render(){
        return <div style={{background:"blue",color:"green"}}>{this.props.message}</div>
    }
}
export default ChildComponent;