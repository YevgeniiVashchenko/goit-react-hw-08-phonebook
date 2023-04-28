import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? component : <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
};
