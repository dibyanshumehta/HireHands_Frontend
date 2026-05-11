import React from "react";
import {
  FaClipboardList,
  FaCheckCircle,
  FaUserTie,
  FaClock,
} from "react-icons/fa";

const DashboardOverview = () => {
  const stats = [
    {
      title: "Total Jobs Posted",
      value: 12,
      icon: <FaClipboardList size={24} />,
      color: "primary",
    },
    {
      title: "Active Jobs",
      value: 5,
      icon: <FaClock size={24} />,
      color: "warning",
    },
    {
      title: "Hired Workers",
      value: 8,
      icon: <FaUserTie size={24} />,
      color: "success",
    },
    {
      title: "Pending Applications",
      value: 14,
      icon: <FaCheckCircle size={24} />,
      color: "info",
    },
  ];

  return (
    <div>
      {/* Page Title */}
      <div className="mb-4">
        <h3 className="fw-bold">Dashboard Overview</h3>
        <p className="text-muted mb-0">
          Track your hiring activity and recent performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4">
        {stats.map((stat, index) => (
          <div className="col-md-6 col-xl-3" key={index}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p className="text-muted mb-1">{stat.title}</p>
                  <h3 className="fw-bold mb-0">{stat.value}</h3>
                </div>

                <div
                  className={`bg-${stat.color} bg-opacity-10 text-${stat.color} p-3 rounded-circle`}
                >
                  {stat.icon}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional Recent Activity Section */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mt-5">
        <h5 className="fw-bold mb-3">Recent Activity</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item px-0">
            New application received for <strong>Cook Position</strong>
          </li>
          <li className="list-group-item px-0">
            You hired <strong>Ravi Kumar</strong> for Plumbing Job
          </li>
          <li className="list-group-item px-0">
            Gardener job marked as <strong>Completed</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardOverview;
