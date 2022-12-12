import { Component } from "react";
import ChildComponent from "./childComponent";

class ParentComponent extends Component{
    constructor(){
        super()
        this.state = {
            welcome:"welcome to the 10k coders of murali sir class",
            profile:{
                fname:"himam",
                lname:"basha"
            }
        }
    }
    render(){
        return (
            
            <ChildComponent message = {this.state.welcome}/>
            
        )
    }
}
export default ParentComponent;