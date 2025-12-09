import { Outlet } from "react-router"
import Header from "./Header"
import Sidebar from "./Sidebar"

function Layout() {
  return (
    <div className="app-layout">
        <Sidebar/>
        <div className="app-main-content">
            {/* Other layout components can go here */}
            <Header/>
            <div className="app-page-content">
                {/* Main content will be rendered here */}
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout;