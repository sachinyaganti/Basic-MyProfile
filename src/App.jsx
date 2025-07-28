import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobProfile from "./components/JobProfile";

function App() {
  return (
    <BrowserRouter basename="/Basic-MyProfile">
      <Routes>
        <Route path="/" element={<JobProfile />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;