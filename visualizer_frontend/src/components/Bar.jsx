import React from "react";

const Bar = ({ value, isComparing, isSwapping }) => {
  const color = isComparing
    ? isSwapping
      ? "bg-red-500"
      : "bg-yellow-400"
    : "bg-blue-500";

  return (
    <div className="flex flex-col items-center flex items-end gap-2 h-72 bg-gray-800 p-4 rounded-xl shadow-lg">
      <div
        className={`w-8 ${color} transition-all duration-150 rounded-t-md`}
        style={{ height: `${value * 2}px` }}
      />
      <span className="text-xs mt-2">{value}</span>
    </div>
  );
};

export default Bar;