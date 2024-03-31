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
      <ul className="flex space-x-20">
        {days.map((day) => {
          return (
            <li className="flex flex-col p-2" key={day}>
              <h1>{day}</h1>
              <ul>
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
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CalendarView;
