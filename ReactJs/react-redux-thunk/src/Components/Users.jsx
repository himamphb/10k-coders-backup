import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersFromAction } from "../Store/Actions/usersActions";
import { CreateUser } from "./CreateUser";
import { UsersTable } from "./UsersTable";


export const Users = () => {
  const usersDetails = useSelector((state) => state.users);
  console.log(usersDetails);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersFromAction());
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
        <CreateUser user={usersDetails}/>
        </div>
        <div className="col-8">
          <UsersTable persons={usersDetails} />
          
        </div>
      </div>
    </div>
  );
};
