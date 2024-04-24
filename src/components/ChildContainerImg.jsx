import React from "react";

const ChildContainerImage = ({ name, number }) => {
    const imageUrl = "https://t4.ftcdn.net/jpg/04/61/47/03/360_F_461470323_6TMQSkCCs9XQoTtyer8VCsFypxwRiDGU.jpg"
  return (
    <div  style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover", // Optional: Adjust background size
        backgroundPosition: "center", // Optional: Adjust background position
      }} className={`child ${name}`}>
      <h1>Box {number}</h1>
    </div>
  );
};

export default ChildContainerImage;
