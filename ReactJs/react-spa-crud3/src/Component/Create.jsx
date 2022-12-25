import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

export const Create = () => {
  const [user, setUser] = useState([
    {
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
    },
  ]);
  const navigate = useNavigate();

  const handlechange = (e) => {
    var newUSer = { ...user };
    newUSer[e.target.name] = e.target.value;
    setUser(newUSer);
  };

  const handleSubmit = () => {
    fetch("http://localhost:3201/form3", {
      method: "post",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    }).then(() => {
     
      navigate("/");
    });
    const ClearForm = () => {
      setUser({
        username: "",
        password: "",
        email: "",
        dateofbirth: "",
        height: "",
        weight: "",
      });
    };
  };
  return (
    <div className="container">
      <h2>welcome to Create</h2>
      <UserForm
        handlechange={handlechange}
        handleSubmit={handleSubmit}
        user={user}
        btnText={"Create user"}
      />
    </div>
  );
};
