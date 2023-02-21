import React from "react";
import { Routes, Route } from "react-router-dom";

import "./app.css";

import BookingDetail from "./pages/BookingDetail";
import BookingComplete from "./pages/components/BookingComplete";

const App = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<BookingDetail />} />
        <Route path="/booking-done" element={<BookingComplete />} />
      </Routes>
    </div>
  );
};

export default App;
