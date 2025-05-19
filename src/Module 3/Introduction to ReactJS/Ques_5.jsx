class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service or console
    console.error("Caught error in Profile component:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ border: "1px solid red", padding: "1rem", borderRadius: "8px" }}>
          <h2>Oops! Something went wrong while loading the profile.</h2>
          <p>Please try refreshing the page or check the data provided.</p>
          <p style={{ color: "gray", fontStyle: "italic" }}>
            Error: {this.state.error?.message}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
