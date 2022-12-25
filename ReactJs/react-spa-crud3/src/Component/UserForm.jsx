import React from "react";

const UserForm = ({ handlechange, handleSubmit, user, btnText }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="">username:</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">email:</label>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">dateofbirth:</label>
          <input
            type="text"
            name="dateofbirth"
            value={user.dateofbirth}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">height:</label>
          <input
            type="text"
            name="height"
            value={user.height}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">weight:</label>
          <input
            type="text"
            name="weight"
            value={user.weight}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-danger">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
