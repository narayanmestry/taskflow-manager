import { Navigate, Outlet } from "react-router"

function PrivateRoutes() {

    const isAuthenticated = true; // Replace with actual authentication logic

    if(!isAuthenticated){
        return <Navigate to="/login" replace/>
    }


    return <Outlet/>
}

export default PrivateRoutes