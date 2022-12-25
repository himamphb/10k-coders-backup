import React from "react";

const UserForm = ({ handlechange, handleSubmit, user, btnText }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="">ID:</label>
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">Username:</label>
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

        <button type="button" onClick={handleSubmit} className="btn btn-danger">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
