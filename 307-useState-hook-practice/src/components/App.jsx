import React from "react";


function App() {
    const now = new Date().toLocaleTimeString().slice(0, 8);
    const [time, setTime] = React.useState(now);

    function updateTime() {
        const newTime = new Date().toLocaleTimeString().slice(0, 8  );
        setTime(newTime);
    }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>update time</button>
    </div>
  );
}

export default App;
