import React from "react";
import PropTypes from "prop-types";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in child component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the profile.</h2>;
    }

    return this.props.children;
  }
}

// Profile Component
function Profile({ name, age }) {
  if (!name || age < 0) {
    throw new Error("Invalid props provided");
  }

  return (
    <div>
      <h2>Profile Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

Profile.defaultProps = {
  name: "Anonymous",
  age: 0,
};

// Wrapper to use Error Boundary
function Ques_5Wrapper() {
  return (
    <ErrorBoundary>
      <Profile name="Amrutha" age={22} />
    </ErrorBoundary>
  );
}

export default Ques_5Wrapper;
