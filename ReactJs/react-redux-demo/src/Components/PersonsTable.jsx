import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePersonAction, deleteUserAction } from "../Store/Actions";

class PersonsTable extends Component {
  render() {
    const { persons } = this.props;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person,i) =>
             <tr key={i}>
                <td>{person.fname}</td>
                <td>{person.lname}</td>
                <td>{person.email}</td>
                <td><button className="btn btn-secondary" onClick={()=>{this.props.editPerson(person)}}>EDIT</button></td>
                <td><button className="btn btn-danger" onClick={()=>{this.props.deletePerson(person)}}>DELETE</button></td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state){
    return{
        persons:state.persons
    }
}
function mapDispatchToProps(dispatch){
    return{
        deletePerson:(person)=>dispatch(deletePersonAction(person))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonsTable)