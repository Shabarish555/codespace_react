import React from "react";
import PropTypes from "prop-types";

function Profile({ name, age }) {
  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// Prop validation
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

// Default props (optional)
Profile.defaultProps = {
  name: "Anonymous",
  age: 0,
};

export default Profile;
