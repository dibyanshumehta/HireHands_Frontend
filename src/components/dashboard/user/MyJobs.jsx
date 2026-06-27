import React from "react";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";

const MyJobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Need a Cook for Home",
      category: "Cook",
      address: "Delhi",
      status: "Active",
      applicants: 5,
    },
    {
      id: 2,
      title: "Plumber Required Urgently",
      category: "Plumber",
      address: "Noida",
      status: "Closed",
      applicants: 3,
    },
    {
      id: 3,
      title: "Gardener for Weekly Maintenance",
      category: "Gardener",
      address: "Ghaziabad",
      status: "Active",
      applicants: 7,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">My Posted Jobs</h3>
        <p className="text-muted mb-0">
          Manage all your posted jobs and applicants here.
        </p>
      </div>

      {/* Jobs Table/Card */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Job Title</th>
                <th>Category</th>
                <th>Status</th>
                <th>Applicants</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.title}</td>
                  <td>{job.category}</td>
                  <td>
                    <span
                      className={`badge ${
                        job.status === "Active"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {job.status}
                    </span>
                  </td>
                  <td>{job.applicants}</td>

                  <td>
                    <div className="d-flex gap-2">

                      <button className="btn btn-sm btn-outline-primary">
                        <FaUsers /> View
                      </button>

                      <button className="btn btn-sm btn-outline-warning">
                        <FaEdit />
                      </button>

                      <button className="btn btn-sm btn-outline-danger">
                        <FaTrash />
                      </button>

                    </div>
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

export default MyJobs;