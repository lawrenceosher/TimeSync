import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";

import QueryForm from "./QueryForm";
import { Link } from "react-router-dom";

function AI() {
  return (
    <div className="ai">
      <h1 className="font-extrabold">TimeSync</h1>
      <p>
        Here you can find helpful suggestions for what to do when hanging out!
      </p>
      <Link className="btn btn-baby-blue" to="/Dashboard">
        Back to Dashboard
      </Link>
      <QueryForm />
    </div>
  );
}
export default AI;
