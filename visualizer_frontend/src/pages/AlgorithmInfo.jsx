import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AlgorithmInfo = () => {
  return (
    <div>

      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-3xl font-bold mb-4">Bubble Sort</h1>

        <p>Simple sorting algorithm based on swapping adjacent elements.</p>

        <h2 className="mt-4 font-bold">Time Complexity</h2>
        <p>O(n²)</p>
      </div>

    </div>
  );
};

export default AlgorithmInfo;