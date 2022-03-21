import React from 'react';

class ErrorBoundary extends React.Component<{}, {hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error, errorInfo);
  }

  render() {
    return (
      <>
        {this.state.hasError ? <h1>Something went wrong!</h1> : this.props.children}
      </>
    );
  }
}

export default ErrorBoundary;
