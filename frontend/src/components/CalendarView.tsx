function CalendarView({availabilityList}) {
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
      <ul className="flex flex-row space-x-20">
        {days.map((day) => {
          return (
            <li className="flex flex-row p-2" key={day}>
              <h1>{day}</h1>
              <ul>
                {availabilityList
                  .filter((item: any) => item.day === day)
                  .map((filteredItem: any, index: any) => {
                    return (
                      <li className="" key={index}>
                        {filteredItem.startTime} - {filteredItem.endTime}
                        <button>+1</button>
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
