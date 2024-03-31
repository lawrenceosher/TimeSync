import { useState } from "react";
import AvailabilityItem from "./AvailabilityItem";

function CalendarView({ availabilityList }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <>
      <div className="container">
        <div className="row">
        {days.map((day) => {
          return (
            <div className="col p-2" key={day}>
              <h3>{day}</h3>
              <ul className="list-group">
                {availabilityList
                  .filter((item: any) => item.day === day)
                  .map((filteredItem: any, index: any) => {
                    return (
                      <AvailabilityItem
                        key={index}
                        availability={filteredItem}
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
