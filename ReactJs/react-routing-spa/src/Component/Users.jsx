import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

import UserForm from "./UserForm";

export const Users = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await (await fetch("http://localhost:3201/users")).json();
    setUsers(response);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {user.map((person, i) => (
            <User usr={person} key={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
