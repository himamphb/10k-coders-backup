import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:3201/users/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const confirmDelete = () => {
    fetch("http://localhost:3201/users/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
        <li>{user.id}</li>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.email}</li>
      </ul>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Confirm Delete
      </button>
    </div>
  );
};
