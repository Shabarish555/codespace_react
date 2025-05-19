import React from "react";
import PropTypes from "prop-types";

// Helper function (encapsulation)
const formatMessage = (message) => {
  if (typeof message !== "string") return "Invalid message";
  return message.trim() || "Empty message";
};

const Ques_4 = React.memo(function Ques_4({ title, message }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{formatMessage(message)}</p>
    </div>
  );
});

Ques_4.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

Ques_4.defaultProps = {
  title: "Welcome!",
  message: "This is a default message from Ques_4 component.",
};

export default Ques_4;





