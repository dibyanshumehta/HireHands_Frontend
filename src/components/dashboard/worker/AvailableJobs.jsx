import React from "react";
import { FaMapMarkerAlt, FaMoneyBillWave, FaClock } from "react-icons/fa";

const availableJobs = [
  {
    id: 1,
    title: "Need Home Cook",
    category: "Cook",
    salary: "₹800/day",
    address: "Delhi",
    posted: "2 hours ago",
  },
  {
    id: 2,
    title: "Urgent Plumbing Work",
    category: "Plumber",
    salary: "₹1500",
    address: "Noida",
    posted: "5 hours ago",
  },
  {
    id: 3,
    title: "Weekly Gardening Help",
    category: "Gardener",
    salary: "₹1200/week",
    address: "Ghaziabad",
    posted: "1 day ago",
  },
  {
    id: 4,
    title: "Need Babysitter",
    category: "Babysitter",
    salary: "₹700/day",
    address: "Meerut",
    posted: "3 hours ago",
  },
];

const AvailableJobs = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Available Jobs</h3>
        <p className="text-muted mb-0">
          Browse jobs that match your skills and apply instantly.
        </p>
      </div>

      {/* Search / Filter */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
        <div className="row g-3">

          <div className="col-md-6">
            <select className="form-select">
              <option>Filter by Category</option>
              <option>Cook</option>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>Babysitter</option>
            </select>
          </div>

          <div className="col-md-3">
            <button className="btn btn-primary w-100">
              Search Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="row g-4">
        {availableJobs.map((job) => (
          <div className="col-md-6" key={job.id}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h5 className="fw-bold">{job.title}</h5>
                  <p className="text-muted mb-0">{job.category}</p>
                </div>

                <span className="badge bg-primary">
                  New
                </span>
              </div>

              <div className="small text-muted mb-2">
                <FaMoneyBillWave className="me-2" />
                {job.salary}
              </div>

              <div className="small text-muted mb-2">
                <FaMapMarkerAlt className="me-2" />
                {job.address}
              </div>

              <div className="small text-muted mb-4">
                <FaClock className="me-2" />
                Posted {job.posted}
              </div>

              <button className="btn btn-primary w-100">
                Apply Now
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableJobs;