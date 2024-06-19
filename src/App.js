import React, { useState } from "react";
import "./index.css";

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>MY TIME</h1>
      <div className="git">
        <h2>{time}</h2>
        <button onClick={getTime}>Get Time</button>
      </div>
    </div>
  );
}

export default App;
