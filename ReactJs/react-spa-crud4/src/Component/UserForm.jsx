import React from "react";

const UserForm = ({ handlechange, handleSubmit, user, btnText }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="">fname:</label>
          <input
            type="text"
            name="fname"
            value={user.fname}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">lname:</label>
          <input
            type="text"
            name="lname"
            value={user.lname}
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
          <label htmlFor="">mobile:</label>
          <input
            type="text"
            name="mobile"
            value={user.mobile}
            onChange={(e) => {
              handlechange(e);
            }}
          />
        </div>

        <button type="button" onClick={handleSubmit} className="btn btn-danger">
          {btnText}
        </button>
      </form>
    </div>
  );
};

export default UserForm;
