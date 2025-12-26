import React, { useRef } from 'react';

const SpotlightCard = ({ children, className = '', ...props }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    divRef.current.style.setProperty('--x', `${x}px`);
    divRef.current.style.setProperty('--y', `${y}px`);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card ${className}`}
      {...props}
    >
      <div className="spotlight-inner"></div>
      {children}
    </div>
  );
};

export default SpotlightCard;
