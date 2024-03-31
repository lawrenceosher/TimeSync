import { useState, useRef } from "react";

function AvailabilityForm({ saveAvailability }) {
  const [dayInput, setDayInput] = useState("Monday");
  const [startTimeInput, setStartTimeInput] = useState("");
  const [endTimeInput, setEndTimeInput] = useState("");

  const handleDayInputChange = (event: any) => {
    console.log(event.target.value);
    setDayInput(event.target.value);
  };

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

  const addAvailabilityInput = (event: any) => {
    event.preventDefault();
    console.log({
      day: dayInput,
      startTime: startTimeInput,
      endTime: endTimeInput,
    });
    saveAvailability({
      day: dayInput,
      startTime: handleTimeInputChange(startTimeInput),
      endTime: handleTimeInputChange(endTimeInput),
    });
    setDayInput("Monday");
    setStartTimeInput("");
    setEndTimeInput("");
  };

  return (
    <>
      <form className="flex flex-col">
        <h2 className="font-bold">Availability Form</h2>
        <label htmlFor="day">Choose a Day:</label>
        <select id="day" value={dayInput} onChange={handleDayInputChange}>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <label htmlFor="start-time">Choose a Start Time:</label>
        <input
          type="time"
          value={startTimeInput}
          onChange={handleStartTimeInputChange}
        />
        <label htmlFor="end-time">Choose an End Time:</label>
        <input
          type="time"
          value={endTimeInput}
          onChange={handleEndTimeInputChange}
        />

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
