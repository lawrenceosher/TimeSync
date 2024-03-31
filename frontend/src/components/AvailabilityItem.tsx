import { ArrowUp } from "lucide-react";
import { useState } from "react";

const AvailabilityItem = ({ availability }) => {
  const [voteCount, setVoteCount] = useState(availability.votes);

  const handleVoteIncrease = () => {
    setVoteCount((prevCount: any) => {
      return prevCount + 1;
    });
    
  };

  

  return (
    <>
      <li className={voteCount > 4 ? 'bg-lime-500': 'bg-lime-200'}  key={availability.id}>
        {availability.startTime} - {availability.endTime}: {voteCount}
        <button onClick={handleVoteIncrease}>
          <ArrowUp />
        </button>
      </li>
    </>
  );
};

export default AvailabilityItem;
