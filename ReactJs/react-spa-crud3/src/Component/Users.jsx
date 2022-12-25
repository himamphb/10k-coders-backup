import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import User from "./User";

export const Users = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const response = await (await fetch("http://localhost:3201/form3")).json();
    setUsers(response);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>username</th>
            <th>password</th>
            <th>email</th>
            <th>dateofbirth</th>
            <th>height</th>
            <th>weight</th>
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
