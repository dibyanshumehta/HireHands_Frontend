import React from "react";
import { FaClock, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const applications = [
  {
    id: 1,
    jobTitle: "Need Home Cook",
    employer: "John Doe",
    status: "Pending",
    appliedOn: "2 May 2026",
  },
  {
    id: 2,
    jobTitle: "Plumbing Work",
    employer: "Amit Sharma",
    status: "Accepted",
    appliedOn: "30 Apr 2026",
  },
  {
    id: 3,
    jobTitle: "Babysitter Needed",
    employer: "Priya Verma",
    status: "Rejected",
    appliedOn: "28 Apr 2026",
  },
];

const MyApplications = () => {
  const getStatusBadge = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-success";
      case "Rejected":
        return "bg-danger";
      default:
        return "bg-warning text-dark";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <FaCheckCircle />;
      case "Rejected":
        return <FaTimesCircle />;
      default:
        return <FaClock />;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">My Applications</h3>
        <p className="text-muted mb-0">
          Track the status of jobs you have applied for.
        </p>
      </div>

      {/* Applications Table */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Employer</th>
                <th>Applied On</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.jobTitle}</td>
                  <td>{app.employer}</td>
                  <td>{app.appliedOn}</td>
                  <td>
                    <span className={`badge ${getStatusBadge(app.status)}`}>
                      <span className="me-1">{getStatusIcon(app.status)}</span>
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default MyApplications;