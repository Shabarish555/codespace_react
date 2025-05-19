import React from "react";

function Ques_2() {
  let currentYear;

  try {
    currentYear = new Date().getFullYear();
  } catch (error) {
    console.error("Error getting current year:", error);
    currentYear = "Unavailable";
  }

  return (
    <div>
      <h1>The current year is: {currentYear}</h1>
    </div>
  );
}

export default Ques_2;

