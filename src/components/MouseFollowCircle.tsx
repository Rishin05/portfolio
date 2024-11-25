"use client"

import React, { useState, useEffect } from "react";

const MouseFollowCircle: React.FC = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setCirclePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add mouse move event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none w-24 h-24 rounded-full bg-gradient-to-l from-gradient-s to-gradient-e opacity-40 shadow-lg -z-50"
      style={{
        left: `${circlePosition.x - 62}px`, 
        top: `${circlePosition.y - 62}px`,  
        transform: "scale(4)", 
        filter: "blur(30px)", 
        transition: "none",
      }}
    />
  );
};

export default MouseFollowCircle;
