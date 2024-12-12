import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Dashboard = () => {
    return (
        <div>
            <div className="mb-10"><Navbar/></div>
            <Outlet/>
        </div>
    );
};

export default Dashboard;