import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Delete = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    fetch("http://localhost:3201/form1/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  const confirmDelete = () => {
    fetch("http://localhost:3201/form1/" + params.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <ul>
        <li>{user.university}</li>
        <li>{user.institute}</li>
        <li>{user.branch}</li>
        <li>{user.degree}</li>
        <li>{user.status}</li>
        <li>{user.cgpa}</li>
        <li>{user.upto}</li>
        <li>{user.experience}</li>
        <li>{user.website}</li>
      </ul>
      <button className="btn btn-danger" onClick={confirmDelete}>
        Confirm Delete
      </button>
    </div>
  );
};
