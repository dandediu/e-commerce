import React from 'react';
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
  ErrorInner,
  SeeMoreLabel,
  Arrow,
} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: '', showError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // console.error(error, errorInfo);

    this.setState({ hasError: true, error, errorInfo });
  }

  seeMoreHandler = () => {
    const { showError } = this.state;

    this.setState({ showError: !showError });
  };

  render() {
    const { error, hasError, errorInfo, showError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/FOeYt4E.png" />
          <ErrorImageText>Sorry, Something went wrong.</ErrorImageText>
          <SeeMoreLabel onClick={this.seeMoreHandler}>
            See More
            <Arrow isInverted={showError}>&#9650;</Arrow>
          </SeeMoreLabel>
          {showError && (
            <ErrorInner>
              {hasError && error.message.toString()}
              {errorInfo.componentStack}
            </ErrorInner>
          )}
        </ErrorImageOverlay>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
