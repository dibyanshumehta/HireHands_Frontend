import React from "react";
import {
  FaHome,
  FaBriefcase,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaUserCog,
  FaSignOutAlt,
} from "react-icons/fa";

const WorkerSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "overview", label: "Dashboard", icon: <FaHome /> },
    { id: "availableJobs", label: "Available Jobs", icon: <FaBriefcase /> },
    { id: "myApplications", label: "My Applications", icon: <FaClipboardCheck /> },
    { id: "earnings", label: "Earnings", icon: <FaMoneyBillWave /> },
    { id: "profile", label: "Profile", icon: <FaUserCog /> },
  ];

  return (
    <div
      className="bg-dark text-white d-flex flex-column p-3 position-fixed"
      style={{
        width: "260px",
        height: "100vh",
        left: 0,
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Brand */}
      <div className="mb-4">
        <h3 className="fw-bold text-primary">HireHands</h3>
        <small className="text-light">Worker Dashboard</small>
      </div>

      {/* Navigation */}
      <ul className="nav flex-column gap-2">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveTab(item.id)}
              className={`btn w-100 d-flex align-items-center gap-3 text-start px-3 py-2 rounded-3 ${
                activeTab === item.id
                  ? "btn-primary"
                  : "btn-dark border-0"
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
        <button className="btn btn-outline-light w-100 d-flex align-items-center gap-2">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
};

export default WorkerSidebar;