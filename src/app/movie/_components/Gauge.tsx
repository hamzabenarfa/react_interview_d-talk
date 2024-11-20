import { useMemo } from "react";

const Gauge = ({ percentage }: { percentage: number }) => {
  const validPercentage = Math.min(Math.max(percentage, 0), 100);
  const radius = 25; 
  const strokeWidth = 5; 
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = useMemo(
    () => circumference - (validPercentage / 100) * circumference,
    [validPercentage, circumference]
  );

  return (
    <div className="relative flex justify-center items-center">
      <svg className="transform rotate-90" width="60" height="60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r={radius} stroke="#e5e7eb" strokeWidth={strokeWidth} fill="transparent" />
        <circle
          cx="30"
          cy="30"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-green-500"
        />
      </svg>
      <div className="absolute text-center text-sm font-semibold text-gray-700">{validPercentage.toFixed(0)}%</div>
    </div>
  );
};

export default Gauge;
