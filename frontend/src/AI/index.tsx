import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";

import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";
import { Link } from "react-router-dom";

function AI() {
  return (
    <div className="ai p-4">
      <Link className="btn btn-primary" to="/Dashboard">
        Back to Dashboard
      </Link>
      <QueryForm />
      {/* <ChatRoom /> */}
    </div>
  );
}
export default AI;
