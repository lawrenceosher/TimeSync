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
    { day: "Monday", startTime: "9:00AM", endTime: "10:00AM", voteCount: 0 },
    { day: "Monday", startTime: "2:00PM", endTime: "4:00PM", voteCount: 0},
    { day: "Monday", startTime: "9:00PM", endTime: "11:00PM", voteCount: 0 },
  ];

  return (
    <>
      <ul>
        {days.map((day) => {
          return (
            <li className="flex flex-row p-2" key={day}>
              {day}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CalendarView;
