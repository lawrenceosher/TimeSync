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

  const timeMappingList = [
    { day: "Monday", startTime: "9:00AM", endTime: "10:00AM" },
    { day: "Monday", startTime: "2:00PM", endTime: "4:00PM" },
    { day: "Monday", startTime: "9:00PM", endTime: "11:00PM" },
  ];

  return (
    <>
      <ul>
        {days.map((day) => {
          return (
            <li className="inline-flex p-2" key={day}>
              {day}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CalendarView;
