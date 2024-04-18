import React, { useState } from "react";

export default function AnasayfaCards(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`card mb-3 ${isHovered ? "bg-black text-white" : ""}`}
        style={{
          maxWidth: "18rem",
          transform: isHovered ? "scale(1.05)" : "",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`card-header ${isHovered ? "bg-black text-white" : ""}`}>{props.value}</div>
      </div>
    </>
  );
}
