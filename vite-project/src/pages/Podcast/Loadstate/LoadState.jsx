// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import "../Loadstate/LoadState.css";

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
      <div className="LoadState timeout">Loading took too long...</div>
    ) : (
      <div className="LoadState loading">
        <div className="loading-animation"> Loading...</div>
      </div>
    );
  }

  if (error) {
    return <div className="LoadState error">Error: {error.message}</div>;
  }

  return children;
}

LoadState.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  children: PropTypes.node.isRequired,
  timeout: PropTypes.number,
};
