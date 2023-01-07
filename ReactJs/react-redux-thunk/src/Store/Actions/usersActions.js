import axios from "axios";
import { useState } from "react";
import { CREATE_USER, GET_USERS } from "./ActionsType";
export const getUsersFromAction = () => {
  return (dispatch) => {
    getLatestUsers(dispatch);
  };
};

export const deleteUserAction = (id) => {
  return (dispatch) => {
    axios.delete("http://localhost:3201/users/" + id).then(() => {
      getLatestUsers(dispatch);
    });
  };
};

function getLatestUsers(dispatch) {
  axios.get("http://localhost:3201/users").then((response) => {
    dispatch({
      type: GET_USERS,
      payload: response.data,
    });
  });
}

export const createUserAction = (dispatch) => {
  axios.post("http://localhost:3201/users").then((res) => {
    getLatestUsers(dispatch);
  // dispatch({
    //   type: CREATE_USER,
    //   payload: res.data,
    // });
  });
};

// export const clearFormAction = () => {
//   useState({
//     name: "",
//     username: "",
//     email: "",
//   });
// };
