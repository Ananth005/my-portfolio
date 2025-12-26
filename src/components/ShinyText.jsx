import React from "react";

const ShinyText = ({ text, disabled = false, speed = 3, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`relative inline-block overflow-hidden ${className}`}
      style={{
        backgroundImage: "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        backgroundColor: disabled ? "#b5b5b5a4" : "transparent",
        animation: `shine ${animationDuration} linear infinite`,
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;
