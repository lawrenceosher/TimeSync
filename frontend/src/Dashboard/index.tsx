import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";
import CalendarView from "./CalendarView";
import AvailabilityForm from "./AvailabilityForm";
import { Link } from "react-router-dom";

function Dashboard(){
  const [timeMappingsList, setTimeMappingsList] = useState([{}]);

  const onSaveAvailabilityHandler = (availability: any) => {
    const newAvailability = {
      ...availability,
      votes: 0,
      id: Math.random()
    };
    setTimeMappingsList((prevAvailabilities) => {
      return [...prevAvailabilities, newAvailability];
    });
  };

  return (
    <>
      <h1 className="font-extrabold">TimeSync</h1>
      <Link className="btn btn-primary" to="/AI">Ask Our AI</Link>
      <div className="">
      <div className="row">
        <div className="col p-2">
        <CalendarView availabilityList={timeMappingsList} />
        </div>
        <div className="rounded border border-secondary col-md-3 p-2">
        <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
        </div>
      </div>
      </div>
    </>
  );
}
export default Dashboard;