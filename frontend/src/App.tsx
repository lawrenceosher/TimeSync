import "./App.css";

import QueryBox from "./components/QueryBox";
import QueryForm from "./components/QueryForm";
import ChatRoom from "./components/ChatRoom";
import AvailabilityForm from "./components/AvailabilityForm";
import CalendarView from "./components/CalendarView";

function App() {
  return (
    <div className="">
      <h1>TimeSync</h1>
      <AvailabilityForm />
      <CalendarView />
    </div>
  );
}

export default App;
