// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  // Example: Check if user is authenticated (replace this with your authentication logic)
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  return isAuthenticated ? (
    <Route>{children}</Route>
  ) : (
    <Navigate to="/login" replace />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
