import React from "react";
import {
  FaHome,
  FaPlusCircle,
  FaClipboardList,
  FaUsers,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UserSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: <FaHome /> },
    { id: "postJob", label: "Post Job", icon: <FaPlusCircle /> },
    { id: "myJobs", label: "My Jobs", icon: <FaClipboardList /> },
    { id: "browseWorkers", label: "Browse Workers", icon: <FaUsers /> },
    { id: "profile", label: "Profile", icon: <FaUserCog /> },
  ];

  return (
    <div
      className="bg-dark text-white d-flex flex-column p-3"
      style={{
        width: "260px",
        minHeight: "100vh",
      }}
    >
      {/* Logo / Brand */}
      <div className="mb-4">
        <h3 className="fw-bold text-primary">HireHands</h3>
        <small className="text-light">User Dashboard</small>
      </div>

      {/* Navigation */}
      <ul className="nav flex-column gap-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`btn w-100 d-flex align-items-center gap-3 text-start px-3 py-2 rounded-3 ${
                activeTab === item.id ? "btn-primary" : "btn-dark border-0"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="mt-auto pt-4">
        <Link to="/userlogin">
          <button className="btn btn-outline-light w-100 d-flex align-items-center gap-2">
            <FaSignOutAlt />
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserSidebar;
