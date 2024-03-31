import "./App.css";

import QueryBox from "./components/QueryBox";
import QueryForm from "./components/QueryForm";
import ChatRoom from "./components/ChatRoom";
import AvailabilityForm from "./components/AvailabilityForm";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <>
      <h1 className="font-extrabold">TimeSync</h1>
      <div className="flex space-x-16">
        <CalendarView />
        <AvailabilityForm />
      </div>
    </>
  );
}

export default App;
