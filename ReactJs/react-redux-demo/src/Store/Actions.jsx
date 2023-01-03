import { ADD_PERSON, DELETE_PERSON } from "./ActionType";

export const addUserAction = () => {
  return {
    type: "ADDUSER",
    paload: "Naveen",
  };
};
export const deleteUserAction = (user) => {
  return {
    type: "DELETEUSER",
    paload: user,
  };
};

export const addPersonAction = (person) => {
  return {
    type: ADD_PERSON,
    payload: person,
  };
};

export const deletePersonAction = (person) => {
  return {
    type: DELETE_PERSON,
    payload: person,
  };
};
