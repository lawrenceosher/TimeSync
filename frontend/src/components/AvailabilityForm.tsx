function AvailabilityForm() {
  return (
    <>
      <form>
        <h2>Availability Form</h2>
        <label htmlFor="day">Choose a Day:</label>
        <select id="days" name="days">
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <label htmlFor="start-time">Choose a Start Time:</label>
        <input type="time" />
        <label htmlFor="end-time">Choose an End Time:</label>
        <input type="time" />
      </form>
    </>
  );
}

export default AvailabilityForm;
