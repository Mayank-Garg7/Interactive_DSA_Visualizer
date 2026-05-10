import React from "react";

const StatsPanel = ({ step, totalSteps }) => {
  return (
    <div className="flex gap-10 mb-6 text-center">
      <div>
        <p className="text-gray-400">Step</p>
        <p className="text-xl font-bold">{step}</p>
      </div>

      <div>
        <p className="text-gray-400">Total Steps</p>
        <p className="text-xl font-bold">{totalSteps}</p>
      </div>

      <div>
        <p className="text-gray-400">Time Complexity</p>
        <p className="text-xl font-bold text-yellow-400">O(n²)</p>
      </div>
    </div>
  );
};

export default StatsPanel;