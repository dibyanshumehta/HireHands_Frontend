import React from "react";
import {
  FaBriefcase,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaStar,
} from "react-icons/fa";

const WorkerDashboardOverview = () => {
  const stats = [
    {
      title: "Available Jobs",
      value: 18,
      icon: <FaBriefcase size={24} />,
      color: "primary",
    },
    {
      title: "Completed Jobs",
      value: 7,
      icon: <FaClipboardCheck size={24} />,
      color: "warning",
    },
    {
      title: "My Applications",
      value: 24,
      icon: <FaStar size={24} />,
      color: "success",
    },
    {
      title: "Total Earnings",
      value: "₹18,500",
      icon: <FaMoneyBillWave size={24} />,
      color: "info",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Dashboard Overview</h3>
        <p className="text-muted mb-0">
          Track your work progress and opportunities.
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

      {/* Recent Activity */}
      <div className="card border-0 shadow-sm rounded-4 p-4 mt-5">
        <h5 className="fw-bold mb-3">Recent Activity</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item px-0">
            Applied for <strong>Cook Position</strong> in Delhi
          </li>
          <li className="list-group-item px-0">
            Completed <strong>Plumbing Job</strong> successfully
          </li>
          <li className="list-group-item px-0">
            Received payment of <strong>₹2,500</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkerDashboardOverview;