import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:3201/form4/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const confirmDelete = () => {
    fetch("http://localhost:3201/form4/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
        <li>{user.fname}</li>
        <li>{user.lname}</li>
        <li>{user.email}</li>
        <li>{user.dateofbirth}</li>
        <li>{user.mobile}</li>
        
      </ul>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Confirm Delete
      </button>
    </div>
  );
};
