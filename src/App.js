import "./App.css";
import React, { useState } from "react";
import Navb from "./components/Navb";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Navb />
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count+1);
        }}
      ></button>
    </div>
  );
}

export default App;
