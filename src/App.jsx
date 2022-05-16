import "./App.css";
import Navb from "./components/Navb";
import Loging from "./components/Loging";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navb />
      <Routes>
        <Route path="/" element={<Loging />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
