import { Navigate, Outlet } from "react-router";

function AdminRoute() {
  const isAuthenticated = true; // Replace with actual authentication logic
  const role = "manager"; // Replace with actual role logic
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (false) {
    return <Navigate to="/404" replace />;
  }

  return <Outlet />;
}

export default AdminRoute;
