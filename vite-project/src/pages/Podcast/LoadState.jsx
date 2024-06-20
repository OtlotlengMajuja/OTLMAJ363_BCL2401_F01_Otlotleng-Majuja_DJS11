// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

export default function LoadState({
  loading,
  error,
  children,
  timeout = 3000,
}) {
  const [timeoutReached, setTimeoutReached] = useState(false);

  if (loading) {
    setTimeout(() => {
      setTimeoutReached(true);
    }, timeout);

    return timeoutReached ? (
      <div>Loading took too long...</div>
    ) : (
      <div>Loading...</div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return children;
}

LoadState.propTypes = {
  loading: PropTypes.node.isRequired,
  error: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  timeout: PropTypes.node.isRequired,
};
