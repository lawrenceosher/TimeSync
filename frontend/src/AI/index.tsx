import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";


import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";

function AI(){
  return (
    <div className="p-4">
        {/* <QueryBox />
        <br /> */}
        <QueryForm />
        <br />
        {/* <ChatRoom /> */}
    </div>
  );
}
export default AI;