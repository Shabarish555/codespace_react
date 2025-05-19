import React from "react";
import PropTypes from "prop-types";

function Ques_6({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please log in.</h2>}
    </div>
  );
}

Ques_6.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

Ques_6.defaultProps = {
  isLoggedIn: false,
};

export default Ques_6;

