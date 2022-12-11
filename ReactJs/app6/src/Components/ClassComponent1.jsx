import { Component } from "react";

export class ClassComponent1 extends Component{
    render(){
        return <h1>i am destructing class Component</h1>
    }
}

export class ClassChildComponent extends Component{
    render(){
        return <h1> i am destructing class childComponent</h1>
               
        
         
    }
}
export default class ClassSibilingComponent extends Component{
    render(){
        return<>
            <h1>i am destructing class sibilingComponent</h1>
            <ClassComponent1/>
            <ClassChildComponent/>        
        </>
         
    }
}