import React from "react";
import PropTypes from "prop-types";

function Ques_4({ title, message }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
}

Ques_4.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

Ques_4.defaultProps = {
  title: "Welcome!",
  message: "This is a default message from Ques_4 component.",
};

export default Ques_4;




