import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AlgorithmInfo from "./pages/AlgorithmInfo";
import Practice from "./pages/Practice";

const App = () => {
  return (
    <BrowserRouter>
      
      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<AlgorithmInfo />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />  

    </BrowserRouter>
  );
};

export default App;