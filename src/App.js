import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Poster from "./components/Poster";  // FIXED path
import "./style.css";                // FIXED path
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (

    <BrowserRouter>
   

      <Routes>
        <Route path="/" element={<Poster />} />
        {/* later you can add more pages like /lottery-info */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
