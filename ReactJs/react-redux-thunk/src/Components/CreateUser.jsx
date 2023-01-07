import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserAction } from "../Store/Actions/usersActions";
import { UsersTable } from "./UsersTable";

export const CreateUser = () => {
  const dispatch = useDispatch;
  const [User, setUser] = useState({
    fname: "",
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    const newUser = { ...User };
    newUser[e.target.name] = e.target.value;
    setUser(newUser);
  };

  return (
    <div className="container">
      <br />
      <div>
        <form>
          <label htmlFor="">First Name : </label>
          <input
            type="text"
            name="fname"
            value={User.fname}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <label htmlFor="Last Name :">UserName : </label>
          <input
            type="text"
            name="username"
            value={User.username}
            onChange={(e) => {
              handleChange(e);
            }}
          />{" "}
          <br />
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={User.email}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              dispatch(createUserAction());
            }}
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};
