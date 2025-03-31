import { NavLink } from "react-router-dom";
import "../css/Sidebar.css"; // Import the CSS file
import Hpage from "./Hpage";
import { IoSettingsOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";



const Sidebar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <div className="sidebar">
            <Hpage></Hpage>
            <div className="side-top">
                <NavLink to="/dashboard" className="sidebar-link">
                    <IoLinkOutline /> Events
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <CiCalendarDate /> Booking
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <IoTimeOutline /> Availability
                </NavLink>
                <NavLink to="/" className="sidebar-link">
                    <IoSettingsOutline /> Settings
                </NavLink>
                <button className="create-btn"><NavLink to="/eventform" >
                    + Create
                </NavLink>
                </button>
            </div>

            <div class="side-bottom">
            <div class="side-bottom-content">
            <button onClick={() => { logout(); navigate("/"); }}> <CiLogout /> Logout</button>
                </div>
                <span><img src="/icons/profile.png" alt="" /><h1>{user.username || "User"}</h1></span>
            </div>




        </div>
    );
};

export default Sidebar;
