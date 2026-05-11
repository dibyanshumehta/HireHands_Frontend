import React from "react";
import { Link } from "react-router-dom";

const WorkerRegistration = () => {
  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="card-body">
                  <h2 className="fw-bold text-center mb-3">
                    Worker Registration
                  </h2>

                  <p className="text-muted text-center mb-4">
                    Create your account to get started with HireHands.
                  </p>

                  <form>
                    {/* Common Fields */}
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter full name"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Username</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Choose username"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Create password"
                      />
                    </div>

                    <hr className="my-4" />

                    <h5 className="fw-semibold mb-3">Worker Details</h5>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Primary Skill</label>
                        <select className="form-select">
                          <option>Select Skill</option>
                          <option>Cook</option>
                          <option>Plumber</option>
                          <option>Electrician</option>
                          <option>Babysitter</option>
                          <option>Gardener</option>
                          <option>Cleaner</option>
                          <option>Driver</option>
                          <option>Carpenter</option>
                        </select>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label className="form-label">Experience</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="e.g. 3 Years"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your city / area"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Bio / Description</label>
                      <textarea
                        rows="3"
                        className="form-control"
                        placeholder="Tell clients about yourself"
                      ></textarea>
                    </div>

                    <Link to="/workerpage">
                      <button className="btn btn-primary w-100 py-2 mt-3">
                        Register
                      </button>
                    </Link>
                  </form>

                  <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}
                    <Link to="/workerlogin">
                      <a href="#" className="text-primary text-decoration-none">
                        Login Here
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkerRegistration;
