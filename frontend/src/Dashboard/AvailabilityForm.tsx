import { useState, useRef } from "react";

//form that users will input the days and times they are free to
function AvailabilityForm({ saveAvailability }) {
  //three separate state slices for user input
  const [dayInput, setDayInput] = useState("Monday");
  const [startTimeInput, setStartTimeInput] = useState("12:00");
  const [endTimeInput, setEndTimeInput] = useState("12:00");

  const handleDayInputChange = (event: any) => {
    setDayInput(event.target.value);
  };

  //converts the time into readable strings that will be displayed
  const handleTimeInputChange = (time) => {
    const [hours, minutes] = time.split(":");
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;

    return formattedTime;
  };

  const handleStartTimeInputChange = (event: any) => {
    setStartTimeInput(event.target.value);
  };

  const handleEndTimeInputChange = (event: any) => {
    setEndTimeInput(event.target.value);
  };

  //when button is clicked, the availabilities will be mapped underneath each of their day buckets
  const addAvailabilityInput = (event: any) => {
    event.preventDefault();

    console.log({ dayInput, startTimeInput, endTimeInput });

    saveAvailability({
      day: dayInput,
      startTime: handleTimeInputChange(startTimeInput),
      endTime: handleTimeInputChange(endTimeInput),
    });
    setDayInput("Monday");
    setStartTimeInput("12:00");
    setEndTimeInput("12:00");
  };

  return (
    <>
      <form className="">
        <h2 className="font-bold">Availability Form</h2>
        <label className="py-2 mb-1" htmlFor="day">
          Choose a Day:
        </label>
        <select id="day" value={dayInput} onChange={handleDayInputChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <br></br>
        <label className="py-2 mb-1" htmlFor="start-time">
          Choose a Start Time (HH:MM AM/PM):{" "}
        </label>
        <input
          type="time"
          value={startTimeInput}
          onChange={handleStartTimeInputChange}
        />
        <br></br>
        <label className="py-2 mb-1" htmlFor="end-time">
          Choose an End Time (HH:MM AM/PM):{" "}
        </label>
        <input
          type="time"
          value={endTimeInput}
          onChange={handleEndTimeInputChange}
        />
        <br></br>

        <button
          className="btn btn-baby-blue mt-2"
          type="submit"
          onClick={addAvailabilityInput}
        >
          Add Availability to Calendar
        </button>
      </form>
    </>
  );
}

export default AvailabilityForm;
