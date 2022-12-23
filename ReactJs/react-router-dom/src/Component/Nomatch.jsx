import React from "react";
import { Link } from "react-router-dom";
export const Nomatch = () => {
  return (
    <div>
      <h3>no match found</h3>
      <p>
        {" "}
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
