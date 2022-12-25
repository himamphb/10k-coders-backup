import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "./UserForm";

export const Edit = () => {
  const [user, setUser] = useState(
    {
        university: "",
        institute: "",
        branch: "",
        degree: "",
        status: "",
        cgpa: "",
        upto: "",
        experience: "",
        website: "",
      
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3201/form1/" + params.id)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  const handlechange = (e) => {
    let newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };
  const updateUser = () => {
    fetch("http://localhost:3201/form1/" + params.id, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="container">
      <UserForm
        user={user}
        handlechange={handlechange}
        btnText="Update User"
        handleSubmit={updateUser}
      />
    </div>
  );
};
