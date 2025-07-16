// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('auth') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
