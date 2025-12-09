import { Route, Routes } from "react-router"
import Login from "../modules/auth/Login"
import Registration from "../modules/auth/Registration"
import PrivateRoutes from "./PrivateRoutes"
import Layout from "../components/layout/layout"
import Dashboard from "../modules/dashboard/Dashboard"

function AppRouters() {
  return (
    <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration />} />
        {/* Protected Routes */}
        <Route element={<PrivateRoutes/>}>
            <Route element={<Layout/>}>
                <Route path="/" element={<Dashboard/>}/>
            </Route>
        </Route>











        {/* Admin Routes */}

        {/* Role-guard (only manager and admin) routes */}

        {/* Erros routes */}
    </Routes>
  )
}

export default AppRouters