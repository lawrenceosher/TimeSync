import AvailabilityForm from "./AvailabilityForm";
import CalendarView from "./CalendarView";
import { useState } from "react";

function DashboardPage() {
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
      <div className="flex space-x-16">
        <CalendarView availabilityList={timeMappingsList} />
        <AvailabilityForm saveAvailability={onSaveAvailabilityHandler} />
      </div>
    </>
  );
}

export default DashboardPage;