import React, { useRef } from "react";
import image from "../../assets/image.jpg";
import "./image.css";

export default function Image() {
  const imageRef = useRef(null);

  const mouseOver = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1.2)";
    }
  };

  const handleMouseOut = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1)";
    }
  };

  return (
    <div className="image">
      <img
        ref={imageRef}
        className="zoomable-image"
        src={image}
        alt="image"
        onMouseOver={mouseOver}
        onMouseOut={handleMouseOut}
      />
    </div>
  );
}