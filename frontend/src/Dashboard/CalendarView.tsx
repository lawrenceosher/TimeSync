import { useState } from "react";
import AvailabilityItem from "./AvailabilityItem";

function CalendarView({ availabilityList, onDelete }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //Using a map, filter, map approach to create the different days 
  //and put the corresponding times underneath each category
  return (
    <>
      <div className="container">
        <div className="row">
        {days.map((day) => {
          return (
            <div className="calendars bg-white border rounded border-secondary col p-2" key={day}>

              <h3>{day}</h3>
              <hr></hr>
              <ul className="list-group">
                {availabilityList
                  .filter((item: any) => item.day === day)
                  .map((filteredItem: any, index: any) => {
                    return (
                      <AvailabilityItem
                        key={index}
                        availability={filteredItem}
                        handleDeleteTime={onDelete}
                      />
                    );
                  })}
              </ul>
              
            </div>
          );
        })}
        </div>
      </div>
    </>
  );
}

export default CalendarView;
