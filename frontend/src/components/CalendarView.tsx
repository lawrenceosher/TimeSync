function CalendarView() {
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
      <ul>
        {days.map((day) => {
          return <li key={day}>{day}</li>;
        })}
      </ul>
    </>
  );
}

export default CalendarView;
