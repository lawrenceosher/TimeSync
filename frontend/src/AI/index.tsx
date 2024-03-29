import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";


import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";

function AI(){
  
    return (
      <div className="p-4">
<h1>AI</h1>
<div>
      <QueryBox />
      <br />
      <QueryForm />
      <br />
      <ChatRoom />
    </div>
</div>
  );
}
export default AI;