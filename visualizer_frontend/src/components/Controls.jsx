import React from "react";

const Controls = ({
  onStart,
  isSorting,
  speed,
  setSpeed,
  isPlaying,
  onPlay,
  onPause
}) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-6">

      {/* Buttons */}
      <div className="flex gap-4">

        <button
          onClick={onStart}
          disabled={isSorting}
          className="px-4 py-2 bg-green-600 rounded"
        >
          Start
        </button>
        <button
          onClick={onPlay}
          className="px-4 py-2 bg-blue-600 rounded"
        >
          Play
        </button>
        <button
          onClick={onPause}
          className="px-4 py-2 bg-red-600 rounded"
        >
          Pause
        </button>
      </div>

      {/* Speed Slider */}
      <div className="mb-15 w-full flex flex-col items-center">

        <label className="mb-2">Speed: {speed}ms</label>

        <input
          type="range"
          min="50"
          max="1000"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-1/2"
        />

      </div>

    </div>
  );
};

export default Controls;