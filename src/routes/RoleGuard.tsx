// this component will check  if user is authenticated and authorized to access the route
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router';

function RoleGuard({allowRoles=[]}) {
   const isAuthenticated = false; // Replace with actual authentication logic

   // check if user is authenticated
   if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
   }

   // check role authorization
    const role = "manager"; // Replace with actual role logic
    if(false){
        return <Navigate to="/404" replace />;
    }
  return <Outlet />;
}

export default RoleGuard