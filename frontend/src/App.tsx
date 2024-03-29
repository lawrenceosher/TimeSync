import "./App.css";

import QueryBox from "./components/QueryBox";
import QueryForm from "./components/QueryForm";
import ChatRoom from "./components/ChatRoom";
import AvailabilityForm from "./components/AvailabilityForm";

function App() {
  return (
    <div>
      <h1>TimeSync</h1>
      <AvailabilityForm />
    </div>
  );
}

export default App;
