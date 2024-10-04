import React, { useState } from "react";

import "./customButton.css";

const CustomButton = ({ buttonInfo, handleClick, itemIndex }) => {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  return (
    <div>
      <button
        className="buttonStyle"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={() => handleClick(itemIndex)}
      >
        <img
          className="buttonImageStyle"
          src={!hover ? buttonInfo.currentButton : buttonInfo.hoverButton}
          alt={buttonInfo.category}
        />
      </button>
    </div>
  );
};

export default CustomButton;
