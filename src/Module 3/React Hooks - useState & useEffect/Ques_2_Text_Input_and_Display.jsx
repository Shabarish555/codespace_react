import React, { useState } from "react";

function Ques_2_Text_Input_and_Display() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type here..."
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default Ques_2_Text_Input_and_Display;
