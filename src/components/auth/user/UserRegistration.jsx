import React from "react";
import { Link } from "react-router-dom";

const UserRegistration = () => {
  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-7">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="card-body">
                  <h2 className="fw-bold text-center mb-3">
                    User Registration
                  </h2>

                  <p className="text-muted text-center mb-4">
                    Create your account to get started with HireHands.
                  </p>

                  <form>
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

                    <Link to="/userpage">
                      <button className="btn btn-primary w-100 py-2 mt-3">
                        Register
                      </button>
                    </Link>
                  </form>

                  <p className="text-center mt-4 mb-0">
                    Already have an account?{" "}
                    <Link to="/userlogin">
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

export default UserRegistration;
