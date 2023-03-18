import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const location = useLocation();

  if (props.loggedIn && props.onlyUnAuth) {
    const { from } = location.state || { pathname: '/' }
    return <Navigate to={from} />
  }

  if (!props.loggedIn && !props.onlyUnAuth) {
    return <Navigate to='/' state={{ from: location }} />
  }

  return (<Component {...props} />)
};

export default ProtectedRoute;