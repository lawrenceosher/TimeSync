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
    { day: "Monday", startTime: "2:00PM", endTime: "4:00PM", voteCount: 0 },
    { day: "Monday", startTime: "9:00PM", endTime: "11:00PM", voteCount: 0 },
    { day: "Tuesday", startTime: "9:00AM", endTime: "10:00AM", voteCount: 0 },
    { day: "Tuesday", startTime: "2:00PM", endTime: "4:00PM", voteCount: 0 },
    { day: "Tuesday", startTime: "9:00PM", endTime: "11:00PM", voteCount: 0 },
    { day: "Wednesday", startTime: "9:00AM", endTime: "10:00AM", voteCount: 0 },
    { day: "Thursday", startTime: "2:00PM", endTime: "4:00PM", voteCount: 0 },
    { day: "Friday", startTime: "9:00PM", endTime: "11:00PM", voteCount: 0 },
    { day: "Saturday", startTime: "9:00AM", endTime: "10:00AM", voteCount: 0 },
  ];

  return (
    <>
      <ul className="flex flex-row space-x-20">
        {days.map((day) => {
          return (
            <li className="flex flex-row p-2" key={day}>
              <h1>{day}</h1>
              <ul>
                {timeMappingList
                  .filter((item) => item.day === day)
                  .map((filteredItem, index) => {
                    return (
                      <li className="" key={index}>
                        {filteredItem.startTime}{filteredItem.endTime}
                      </li>
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
