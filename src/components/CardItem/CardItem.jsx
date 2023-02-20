import React from "react";

const CardItem = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="" />
    </div>
  );
};

export { CardItem };
