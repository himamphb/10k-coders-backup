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
    const response = await (await fetch("http://localhost:3201/form1")).json();
    setUsers(response);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>university</th>
            <th>institute</th>
            <th>branch</th>
            <th>degree</th>
            <th>status</th>
            <th>cgpa</th>
            <th>upto</th>
            <th>experience</th>
            <th>website</th>
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
