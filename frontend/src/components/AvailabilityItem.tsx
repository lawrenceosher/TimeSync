import { useState } from "react";
import { ArrowUp,ArrowDown } from 'react-bootstrap-icons'; // Import the arrow icon

const AvailabilityItem = ({ availability }) => {
  const [voteCount, setVoteCount] = useState(availability.votes);

  const handleVoteIncrease = () => {
    setVoteCount((prevCount: any) => {
      return prevCount + 1;
    });
  }
    const handleVoteDecrease = () => {
      setVoteCount((prevCount: any) => {
        return prevCount - 1;
      });
    
  };

  

  return (
    <>
      <li className={voteCount > 4 ? 'list-group-item bg-success p-2 m-2': 'list-group-item bg-warning p-2 m-2'}  key={availability.id}>
        {availability.startTime} - {availability.endTime}: {voteCount}
        <button onClick={handleVoteIncrease}>
        <ArrowUp/>
        </button>
        <button onClick={handleVoteDecrease}>
        <ArrowDown/>
        </button>
      </li>
    </>
  );
};

export default AvailabilityItem;
