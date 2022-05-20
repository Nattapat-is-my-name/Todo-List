import "./App.css";
import Navb from "./components/Navb";
import Loging from "./components/Loging";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Userprovider from "./Context/User";

function App() {
  return (
    <Userprovider>
      <div className="App">
        <Navb />
        <Routes>
          <Route path="/" element={<Loging />} />
          <Route path="register" element={<Register />} />
          <Route path="main" element={<MainPage />} />
        </Routes>
      </div>
    </Userprovider>
  );
}

export default App;
