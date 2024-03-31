import "./App.css";

import QueryBox from "./components/QueryBox";
import QueryForm from "./components/QueryForm";
import ChatRoom from "./components/ChatRoom";
import AvailabilityForm from "./components/AvailabilityForm";
import CalendarView from "./components/CalendarView";
import { useState } from "react";

function App() {

  const [timeMappingsList, setTimeMappingsList] = useState([{}]);

  const onSaveAvailabilityHandler = (availability: any) => {
    const newAvailability = {
      ...availability,
      voteCount: 0
    };
    setTimeMappingsList((prevAvailabilities) => {
      return [...prevAvailabilities, newAvailability];
    });
  };

  return (
    <>
      <h1 className="font-extrabold">TimeSync</h1>
      <div className="flex space-x-16">
        <CalendarView availabilityList={timeMappingsList} />
        <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
      </div>
    </>
  );
}

export default App;
