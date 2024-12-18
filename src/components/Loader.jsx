import React from 'react';

const Loader = ({ percentage, size = 100, strokeWidth = 10, imageUrl }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-progress-bar" style={{ width: size, height: size, position: 'relative' }}>
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#FD6F00"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      {/* Image in the center */}
      <img
        src={imageUrl}
        alt="Progress Icon"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: size * 0.4, // Adjust image size relative to the progress bar
          height: size * 0.4,
          borderRadius: '50%', // Optional: make the image circular
        }}
      />

      {/* Percentage Text */}
      <div
        style={{
          position: 'absolute',
          bottom: -20,
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
        }}
      >
        <p>{Math.round(percentage)}%</p>
      </div>
    </div>
  );
};

export default Loader;
