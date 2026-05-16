import React, { useState, useRef, useEffect } from "react";
import Bar from "./Bar";
import StatsPanel from "./StatsPanel";
import ActionDisplay from "./ActionDisplay";
import Controls from "./Controls";

const Visualizer = () => {
  const [isSorting, setIsSorting] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);

  const [algorithm, setAlgorithm] = useState("bubble");

  const [array, setArray] = useState([50, 20, 80, 40, 10, 70]);
  const [steps, setSteps] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [comparing, setComparing] = useState([]);
  const [isSwapping, setIsSwapping] = useState(false);

  const [loading, setLoading] = useState(false);

  const [step, setStep] = useState(0);
  const [totalSteps, setTotalSteps] = useState(0);
  const [action, setAction] = useState("");

  const intervalRef = useRef(null);


  useEffect(() => {
    if (isPlaying) {
      pause();
      play();
    }
  }, [speed]);


  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);


  const goToStep = (index, stepsData = steps) => {
    const stepData = stepsData[index];
    if (!stepData) return;

    setArray(stepData.array);
    setComparing(stepData.comparing || []);
    setIsSwapping(stepData.swapping || false);

    setStep(index + 1);
    setCurrentIndex(index);
    setAction(stepData.description || "");
  };

  const play = () => {
    if (isPlaying || steps.length === 0) return;
    clearInterval(intervalRef.current); // 🔥 safety cleanup
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(intervalRef.current);
          setIsPlaying(false);
          return prev;
        }
        goToStep(prev + 1);
        return prev + 1;
      });
    }, speed);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  };

  // 🚀 START SORT
  const startSort = async () => {
    try {
      setLoading(true);
      setIsSorting(true);
      setCurrentIndex(0);
      setStep(0);
      setAction("");
      setComparing([]);
      setIsSwapping(false);
      pause();
      const response = await fetch(
        `https://dsa-visualizer-lab-1.onrender.com/sort/${algorithm}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ array }),
        }
      );

      const data = await response.json();

      setSteps(data.steps || []);
      setTotalSteps(data.steps?.length || 0);

      setLoading(false);
      setIsSorting(false);

      goToStep(0, data.steps || []);
    } catch (error) {
      console.error("Sorting error:", error);
      setLoading(false);
      setIsSorting(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-[#0f172a] min-h-screen text-white">

      <h2 className="text-3xl font-bold mb-4">DSA Visualizer</h2>

      <StatsPanel step={step} totalSteps={totalSteps} />

      {loading && (
        <div className="text-yellow-400 animate-pulse mb-4">
          Generating Steps...
        </div>
      )}

      <ActionDisplay text={action} />

      <div className="flex gap-4 items-center bg-amber-50 rounded-lg">
        <select
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
          className="p-2 text-black rounded"
        >
          <option value="bubble">Bubble Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="quick">Quick Sort</option>
        </select>
      </div>

      <Controls
        onStart={startSort}
        isSorting={isSorting}
        speed={speed}
        setSpeed={setSpeed}
        isPlaying={isPlaying}
        onPlay={play}
        onPause={pause}
      />

      <div className="flex items-end gap-2 h-64 mb-8">
        {array.map((value, idx) => (
          <Bar
            key={idx}
            value={value}
            isComparing={comparing.includes(idx)}
            isSwapping={isSwapping}
          />
        ))}
      </div>

      {steps.length > 0 && (
        <div className="w-full flex flex-col items-center mb-6">
          <input
            type="range"
            min="0"
            max={steps.length - 1}
            value={currentIndex}
            onChange={(e) => goToStep(Number(e.target.value))}
            className="w-1/2"
          />

          <p className="text-sm mt-2">
            Step {currentIndex + 1} / {steps.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Visualizer;