import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const WorkerTopbar = () => {
  return (
    <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center rounded-3">

      {/* Left Side */}
      <div>
        <h4 className="fw-bold mb-0">Welcome Back 👋</h4>
        <small className="text-muted">
          Explore jobs and manage your applications.
        </small>
      </div>

      {/* Right Side */}
      <div className="d-flex align-items-center gap-4">

        {/* Notifications */}
        <button className="btn btn-light position-relative rounded-circle p-2">
          <FaBell size={18} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            2
          </span>
        </button>

        {/* Profile Info */}
        <div className="d-flex align-items-center gap-2">
          <FaUserCircle size={36} className="text-primary" />
          <div>
            <p className="mb-0 fw-semibold">Ravi Kumar</p>
            <small className="text-muted">Worker</small>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkerTopbar;