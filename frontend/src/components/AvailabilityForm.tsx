import { useState, useRef } from "react";

function AvailabilityForm() {
  

  const [dayInput, setDayInput] = useState("");
  const [startTimeInput, setStartTimeInput] = useState("");
  const [endTimeInput, setEndTimeInput] = useState("");

  const addAvailabilityInput = () => {
    
  }

  return (
    <>
      <form>
        <h2>Availability Form</h2>
        <label htmlFor="day">Choose a Day:</label>
        <select id="days" name="days" value={dayInput} >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <label htmlFor="start-time">Choose a Start Time:</label>
        <input type="time" value={startTimeInput} />
        <label htmlFor="end-time">Choose an End Time:</label>
        <input type="time" value={endTimeInput} />

        <button onClick={addAvailabilityInput}>
          Add Availability to Calendar
        </button>
      </form>
    </>
  );
}

export default AvailabilityForm;
