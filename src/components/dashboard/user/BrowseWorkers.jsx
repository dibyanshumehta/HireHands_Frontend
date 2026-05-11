import React from "react";
import { FaMapMarkerAlt, FaStar, FaBriefcase } from "react-icons/fa";

const workers = [
  {
    id: 1,
    name: "Ravi Kumar",
    skill: "Cook",
    experience: "4 Years",
    location: "Delhi",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Aman Verma",
    skill: "Plumber",
    experience: "6 Years",
    location: "Noida",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Priya Sharma",
    skill: "Babysitter",
    experience: "3 Years",
    location: "Ghaziabad",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Rahul Singh",
    skill: "Electrician",
    experience: "5 Years",
    location: "Meerut",
    rating: 4.7,
  },
];

const BrowseWorkers = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Browse Workers</h3>
        <p className="text-muted mb-0">
          Explore skilled professionals available near you.
        </p>
      </div>

      {/* Search / Filter Bar */}
      <div className="card border-0 shadow-sm rounded-4 p-3 mb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by skill or name"
            />
          </div>

          <div className="col-md-4">
            <select className="form-select">
              <option>Filter by Skill</option>
              <option>Cook</option>
              <option>Plumber</option>
              <option>Electrician</option>
              <option>Babysitter</option>
            </select>
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100">
              Search Workers
            </button>
          </div>
        </div>
      </div>

      {/* Workers Grid */}
      <div className="row g-4">
        {workers.map((worker) => (
          <div className="col-md-6 col-xl-3" key={worker.id}>
            <div className="card border-0 shadow-sm rounded-4 p-4 h-100">

              <div className="text-center mb-3">
                <div
                  className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                  }}
                >
                  {worker.name.charAt(0)}
                </div>
              </div>

              <h5 className="fw-bold text-center">{worker.name}</h5>

              <p className="text-muted text-center mb-3">
                {worker.skill}
              </p>

              <div className="small text-muted mb-2">
                <FaBriefcase className="me-2" />
                {worker.experience}
              </div>

              <div className="small text-muted mb-2">
                <FaMapMarkerAlt className="me-2" />
                {worker.location}
              </div>

              <div className="small text-warning mb-4">
                <FaStar className="me-2" />
                {worker.rating} Rating
              </div>

              <button className="btn btn-primary w-100">
                View Profile
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseWorkers;