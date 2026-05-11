import React from "react";
import { Link } from "react-router-dom";

const UserLogin = ({ role }) => {
  return (
    <>
      <section className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              <div className="card shadow-lg border-0 rounded-4 p-4">
                <div className="card-body">
                  <h2 className="fw-bold text-center mb-3">User Login</h2>

                  <p className="text-muted text-center mb-4">
                    Welcome back! Login to continue.
                  </p>

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter username"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                      />
                    </div>

                    <div className="text-end mb-4">
                      <a
                        href="#"
                        className="text-decoration-none small text-primary"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <Link to="/userpage">
                      <button className="btn btn-primary w-100 py-2">
                        Login
                      </button>
                    </Link>
                  </form>

                  <p className="text-center mt-4 mb-0">
                    Don't have an account?{" "}
                    <Link to="/userregistration">
                      <a href="#" className="text-primary text-decoration-none">
                        Register Now
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

export default UserLogin;
