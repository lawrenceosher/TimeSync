import { useState } from "react";
import { ArrowUp, ArrowDown } from "react-bootstrap-icons"; // Import the arrow icon

//need to have a separate class to keep track of the vote count for each of the availabilities
const AvailabilityItem = ({ availability, handleDeleteTime }) => {
  const [voteCount, setVoteCount] = useState(availability.votes);

  //increases vote by one every time button is clicked
  const handleVoteIncrease = () => {
    setVoteCount((prevCount: any) => {
      return prevCount + 1;
    });
  };
  
  //decreases vote by one every time button is clicked
  const handleVoteDecrease = () => {
    setVoteCount((prevCount: any) => {
      return prevCount - 1;
    });
  };

  return (
    <>
      <li
        className={
          voteCount > 4
            ? "list-group-item sage p-2 m-2"
            : "list-group-item light-yellow p-2 m-2"
            //conditional rendering for different backgrounds based on vote count
        }
        key={availability.id}
      >
        {availability.startTime} - {availability.endTime}
        <br />
        Availability Vote: {voteCount}
<div style={{display:"flex"}}>
        <button onClick={handleVoteIncrease}>
          <ArrowUp className="icons"/>
        </button>
        <button onClick={handleVoteDecrease}>
          <ArrowDown className="icons"/>
        </button>
       
        <button className="btn btn-transparent m-2" onClick={() => handleDeleteTime(availability.id)}>
          X
        </button>
        </div>
      </li>
    </>
  );
};

export default AvailabilityItem;
