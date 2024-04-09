import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import QueryBox from "../components/QueryBox";
import QueryForm from "../components/QueryForm";
import ChatRoom from "../components/ChatRoom";
import CalendarView from "./CalendarView";
import AvailabilityForm from "./AvailabilityForm";
import { Link } from "react-router-dom";

function Dashboard() {
  const [timeMappingsList, setTimeMappingsList] = useState([{}]);

  //passing the state up from the availability form so that it gets properly mapped underneath each day
  const onSaveAvailabilityHandler = (availability: any) => {
    const newAvailability = {
      ...availability,
      votes: 0,
      id: Math.random(),
    };
    setTimeMappingsList((prevAvailabilities) => {
      console.log(prevAvailabilities);
      return [...prevAvailabilities, newAvailability].sort((a, b) => {
        // Convert start times to comparable values
        const timeA = new Date(`2000-01-01 ${a.startTime}`);
        const timeB = new Date(`2000-01-01 ${b.startTime}`);

        // Compare start times
        return timeA - timeB;
      });
    });
  };

  const compareStartTimes = (startTime1: string, startTime2: string) => {
    let startHour1 = startTime1.substring(0, 3);
    let startHour2 = startTime1.substring(0, 3);

    let startHour1Num;
    startHour1Num = parseInt(startHour1);

    let startHour2Num;
    startHour2Num = parseInt(startHour2);

    return startHour1Num - startHour2Num;
  };

  return (
    <>
      <h1 className="font-extrabold">TimeSync</h1>
      <Link className="btn btn-primary" to="/AI">
        Ask Our AI
      </Link>
      <div className="">
        <div className="row">
          <div className="col p-2">
            <CalendarView availabilityList={timeMappingsList} />
          </div>
          <div className="rounded border border-secondary col-md-3 p-2 mt-2">
            <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
