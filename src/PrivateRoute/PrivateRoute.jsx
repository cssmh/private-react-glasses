import { Navigate } from "react-router-dom";
import GetAuth from "../AuthProvider/GetAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { user } = GetAuth();
  if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
