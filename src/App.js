import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
