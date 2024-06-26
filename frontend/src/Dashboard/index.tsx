import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import './index.css';
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

      //sorting the availability times that get mapped so they display in chronological order instead of input order
      return [...prevAvailabilities, newAvailability].sort((a, b) => {
        // convert start times to comparable values
        const timeA = new Date(`2000-01-01 ${a.startTime}`);
        const timeB = new Date(`2000-01-01 ${b.startTime}`);

        // compare start times
        return timeA.getTime() - timeB.getTime();
      });
    });
  };

  //users can delete the time altogether if it doesn't work or they made a mistake with their input
  const onDeleteAvailabilityHandler = (availabilityID: number) => {
    //filtering based on the clicked availability id - ensuring that that id is no longer in the list
    setTimeMappingsList((prevAvailabilities) => {
      const keptAvailabilities = prevAvailabilities.filter(
        (filteredAvailability: any) => filteredAvailability.id != availabilityID
      );
      return [...keptAvailabilities];
    });
  };

  return (
    <div className="dashboard">
      <h1 className="font-extrabold">TimeSync</h1>
      <p>
        Welcome to TimeSync! You can input the availabilities of your friends
        and vote on the time that works best to hang out. Once you settle on a
        time, you can ask our AI about what to do for your hangout plans.
      </p>
      <Link className="btn btn-baby-blue" to="/AI">
        Ask Our AI
      </Link>
      <div className="">
        <div className="row">
          <div className="col p-2">
            <CalendarView
              availabilityList={timeMappingsList}
              onDelete={onDeleteAvailabilityHandler}
            />
          </div>
          <div className="availability col-md-2 p-2 mt-2">
            <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
