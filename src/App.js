import "./App.css";
import DigitalClock from "./comp/Clock";
import Day from "./comp/Day";
import ClockType from "./comp/ClockType";
import { useState } from "react";

function App() {
  const [is24H, stIs24H] = useState(true);
  return (
    <div className="App clock my-auto">
      <Day />
      <DigitalClock is24H={is24H} />
      <ClockType is24H={is24H} stIs24H={stIs24H} />
    </div>
  );
}

export default App;
