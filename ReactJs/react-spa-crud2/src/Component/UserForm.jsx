import React from "react";

const UserForm = ({ handlechange, handleSubmit, user, btnText }) => {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="">university:</label>
          <input
            type="text"
            name="university"
            value={user.university}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">institute:</label>
          <input
            type="text"
            name="institute"
            value={user.institute}
            onChange={(e) => {
              handlechange(e)
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">branch:</label>
          <select
           
            name="branch"
            value={user.branch}
            onChange={(e) => {
              handlechange(e)
            }}
          >
            <option value="ece">ece</option>
            <option value="cse">cse</option>
            <option value="eee">eee</option>
            <option value="mech">mech</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="">degree:</label>
          <select
            name="degree"
            value={user.degree}
            onChange={(e) => {
              handlechange(e);
            }}
          >
            <option value="be">be</option>
            <option value="bcom">bcom</option>
            <option value="bsc">bsc</option>
            <option value="biotech">biotech</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="">status:</label>
          <select
            name="status"
            value={user.status}
            onChange={(e) => {
             handlechange(e);
            }}
          >
            <option value="pursuing">pursuing</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="">cgpa:</label>
          <input
            type="text"
            name="cgpa"
            value={user.cgpa}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">upto:</label>
          <input
            type="text"
            name="upto"
            value={user.upto}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">experience:</label>
          <input
            type="number"
            name="experience"
            value={user.experience}
            onChange={(e) => {
              handlechange(e);
            }}
          />{" "}
        </div>
        <div className="mb-3">
          <label htmlFor="">website:</label>
          <input
            type="url"
            name="website"
            value={user.website}
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
