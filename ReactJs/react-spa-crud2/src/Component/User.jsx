import React from "react";
import { useNavigate } from "react-router-dom";

const User = ({ usr }) => {
  const navigate = useNavigate()
  const handleDelete = (usr) => {
    navigate('/delete/'+usr.id)
  };
  const hanldeEdit = (usr)=>{
    navigate('/edit/'+usr.id)
  }
  return (
    <tr>
      <td>{usr.university}</td>
      <td>{usr.institute}</td>
      <td>{usr.branch}</td>
      <td>{usr.degree}</td>
      <td>{usr.status}</td>
      <td>{usr.cgpa}</td>
      <td>{usr.upto}</td>
      <td>{usr.experience}</td>
      <td>{usr.website}</td>
      <td>
        <button className="btn btn-warning" onClick={()=>{hanldeEdit(usr)}}>Edit</button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleDelete(usr);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
