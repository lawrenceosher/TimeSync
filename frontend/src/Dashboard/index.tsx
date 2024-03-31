import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "../App.css";


import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";
import CalendarView from "../components/CalendarView";
import AvailabilityForm from "../components/AvailabilityForm";

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
      <div className="">
      <div className="row">
        <div className="col-md-9 p-2">
        <CalendarView availabilityList={timeMappingsList} />
        </div>
        <div className="col-md-3 p-2">
        <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
        </div>
      </div>
      </div>
    </>
  );
}
export default Dashboard;